// import { takeLatest, put, select, take, cancel, fork, call } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";
import actionTypes from "../constants";
import * as showContactService from "../../services/showContactService";
import * as showContactModel from "../../model/showContact.model";

import fakeDataForShowContact from "../../services/fakeData/showContactFakeData";

function* handleGetShowContactDetails() {
    try {
        const response = yield showContactService.fetchShowsContact();
        console.log("%c response ", "background: aqua; color: black", response);
        // const mappedData = showContactModel.showContactDataForUI(response.data);
        const mappedData = showContactModel.showContactDataForUI(fakeDataForShowContact);

        yield put({
            type: actionTypes.FETCH_SHOW_CONTACT_SUCCESS,
            payload: {
                mappedData
            }
        });
    } catch (err) {
        yield put({
            type: actionTypes.FETCH_SHOW_CONTACT_FAILURE,
            payload: {
                fakeDataForShowContact,
                error: err.message
            }
        });
    }
}

export default [takeLatest(actionTypes.FETCH_SHOW_CONTACT_REQUEST, handleGetShowContactDetails)];
