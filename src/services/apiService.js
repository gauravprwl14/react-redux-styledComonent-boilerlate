import httpStatus from "http-status";
import fetch from "node-fetch";
import * as R from "ramda";
import { isNilOrEmpty } from "../utils/helper";

const getResponseBody = (contentType = "", response) => {
    if (contentType.includes("text/plain")) {
        return response.text();
    }
    if (contentType.includes("application/json")) {
        return response.json();
    }
    if (contentType.includes("application/octet-stream")) {
        return response.blob();
    }
    return response.text();
};

const handleSuccessResponse = async (contentType, response) => {
    let returnObj = {};

    if (response.status === httpStatus.NO_CONTENT) {
        return returnObj;
    }

    if (contentType.includes("application/octet-stream")) {
        const blobData = await getResponseBody(contentType, response);
        returnObj = { url: URL.createObjectURL(blobData) };
    } else {
        returnObj = await getResponseBody(contentType, response);
    }
    return returnObj;
};

const handleFailureResponse = async (contentType, response) => {
    let returnObj = {};
    let errorDataFromServer = null;
    if (contentType.includes("application/octet-stream")) {
        const blobData = await getResponseBody(contentType, response);
        errorDataFromServer = { url: URL.createObjectURL(blobData) };
    } else {
        errorDataFromServer = await getResponseBody(contentType, response);
    }
    // if response is failed and does not contain the error Msg
    // assign the default Error Msg as Failed Response Status
    if (R.isNil(errorDataFromServer) || R.isNil(errorDataFromServer.error)) {
        returnObj.error = httpStatus[response.status];
    } else {
        returnObj = errorDataFromServer;
    }
    return returnObj;
};

const responseHandler = async (response, resolve, reject) => {
    const metaData = {
        responseStatus: response.status
    };
    let returnObj = {};
    try {
        let contentType = response.headers.get("content-type") || "";
        if (contentType) {
            contentType = contentType.toLowerCase();
        }

        if (response.ok) {
            returnObj = await handleSuccessResponse(contentType, response);
            returnObj = R.merge(returnObj, metaData);
            return resolve(returnObj);
        }
        returnObj = await handleFailureResponse(contentType, response);
        returnObj = R.merge(returnObj, metaData);
        return reject(returnObj);
    } catch (error) {
        returnObj.error = error.message ? error.message : true;
        returnObj = R.merge(returnObj, metaData);
        return reject(returnObj);
    }
};

function getBaseApiEndPoint() {
    console.log("%c process.env ", "background: aqua; color: black", process.env);
    if (process.env.REACT_APP_API_URL) {
        return process.env.REACT_APP_API_URL;
    }

    return "";
}

export async function callApi(apiObject) {
    const fetchObject = {};
    let body = {};
    fetchObject.method = apiObject.method ? apiObject.method : "GET";

    // if apiObject contains authenticationRequired(true/false),
    // which indicate, whether we need to send the token with the api Call or not
    // if apiObject does not contains authentication property,
    // than by default we are sending the token
    let isAuthenticationRequired = true;
    if (typeof apiObject.authenticationRequired === "boolean") {
        isAuthenticationRequired = apiObject.authenticationRequired;
    }

    fetchObject.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
    };

    fetchObject.headers = apiObject.headers
        ? { ...fetchObject.headers, ...apiObject.headers }
        : { ...fetchObject.headers };

    if (
        fetchObject.headers["Content-Type"] &&
        (fetchObject.headers["Content-Type"] === "application/xml" ||
            fetchObject.headers["Content-Type"] === "text/xml")
    ) {
        body = apiObject.body ? apiObject.body : {};
    } else {
        body = apiObject.body ? JSON.stringify(apiObject.body) : {};
    }

    if (fetchObject.method === "GET") {
        fetchObject.body = undefined;
    } else {
        fetchObject.body = body;
    }

    if (isAuthenticationRequired) {
        // if headers.authorization is null, ie no token is present in the headers object
        // then get the stored token, else use token which is present
        // in the headers authorization property
        if (isNilOrEmpty(fetchObject.headers.authorization)) {
            const token = localStorage.getItem("AUTH_TOKEN");
            fetchObject.headers.authorization = `BEARER ${token}`;
        }
    }

    const url = `${getBaseApiEndPoint()}/${apiObject.endPoint}`;
    return new Promise(async (resolve, reject) => {
        try {
            const fetchResult = await fetch(url, fetchObject);
            return responseHandler(fetchResult, resolve, reject);
        } catch (err) {
            return reject({
                error: "someThing Unexpected Happened",
                msg: err.message || "Something Went Wrong"
            });
        }
    });
}

export default callApi;
