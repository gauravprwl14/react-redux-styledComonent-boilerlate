import actionTypes from "../constants";

const initialState = {
    showContactMasterData: {}
};

export default function(state = initialState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.FETCH_SHOW_CONTACT_SUCCESS: {
            return {
                ...state,
                showContactMasterData: payload.mappedData
            };
        }

        default:
            return state;
    }
}
