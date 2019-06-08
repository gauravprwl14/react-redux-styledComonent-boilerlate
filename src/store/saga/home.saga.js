// import { takeLatest, put, select, take, cancel, fork, call } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";
import actionTypes from "../constants";
import * as showContactService from "../../services/showContactService";

function* handleGetShowContactDetails() {
    try {
        const response = yield showContactService.fetchShowsContact();
        yield put({
            type: actionTypes.FETCH_SHOW_CONTACT_SUCCESS,
            payload: response
        });
    } catch (err) {
        yield put({
            type: actionTypes.FETCH_SHOW_CONTACT_ERROR,
            payload: {
                error: err.message
            }
        });
    }
}

export default [takeLatest(actionTypes.FETCH_SHOW_CONTACT_REQUEST, handleGetShowContactDetails)];
