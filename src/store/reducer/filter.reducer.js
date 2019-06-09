import actionTypes from "../constants";
import { isNilOrEmpty } from "../../utils/helper";

const initialState = {
    filterToRender: [],
    isLoading: false,
    selectedFilters: {}
};

export default function(state = initialState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.FETCH_ALL_FILTERS_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case actionTypes.FETCH_ALL_FILTERS_SUCCESS: {
            if (isNilOrEmpty(payload.data)) {
                return state;
            }
            return {
                ...state,
                isLoading: false,
                filterToRender: payload.data
            };
        }
        case actionTypes.FETCH_ALL_FILTERS_FAILURE: {
            if (isNilOrEmpty(payload.data)) {
                return state;
            }
            return {
                ...state,
                isLoading: false,
                filterToRender: payload.data
            };
        }

        default:
            return state;
    }
}
