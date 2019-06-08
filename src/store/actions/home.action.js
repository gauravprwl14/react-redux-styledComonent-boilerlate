import actionTypes from "../constants";

export const testAsyncAction = () => ({
    type: actionTypes.FETCH_SHOW_CONTACT_REQUEST,
    payload: {}
});

export const testSyncAction = () => ({
    type: actionTypes.TEST_SYNC_ACTION,
    payload: {}
});

export const fetchShowContact = () => {
    return {
        type: actionTypes.FETCH_SHOW_CONTACT_REQUEST,
        payload: {}
    };
};
