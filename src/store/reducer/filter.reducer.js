import actionTypes from "../constants";
import { isNilOrEmpty } from "../../utils/helper";

const initialState = {
    filterToRender: [],
    selectedFilters: {}
};

export default function(state = initialState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.FETCH_ALL_FILTERS_SUCCESS: {
            if (isNilOrEmpty(payload.data)) {
                return state;
            }
            return {
                ...state,
                filterToRender: payload.data
            };
        }

        default:
            return state;
    }
}
