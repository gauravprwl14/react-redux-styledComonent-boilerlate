import actionTypes from "../constants";

export const testAsyncAction = () => ({
    type: actionTypes.TEST_ASYNC_ACTION_REQUEST,
    payload: {}
});

export const testSyncAction = () => ({
    type: actionTypes.TEST_SYNC_ACTION,
    payload: {}
});
