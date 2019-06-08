import actionTypes from "../constants";

const initialState = {
    asyncActionCount: 0,
    syncActionCount: 0
};

export default function(state = initialState, action = {}) {
    const { type } = action;

    switch (type) {
        case actionTypes.TEST_ASYNC_ACTION_REQUEST: {
            return {
                ...state,
                asyncActionCount: state.asyncActionCount + 1
            };
        }
        case actionTypes.TEST_SYNC_ACTION: {
            return {
                ...state,
                syncActionCount: state.syncActionCount + 1
            };
        }

        default:
            return state;
    }
}
