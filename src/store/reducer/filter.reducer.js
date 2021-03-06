import * as R from "ramda";
import actionTypes from "../constants";
import { isNilOrEmpty } from "../../utils/helper";

const initialState = {
    filterToRender: [],
    isLoading: false,
    selectedFilters: {},
    searchKeyword: ""
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
            return {
                ...state,
                isLoading: false,
                filterToRender: !R.isNil(payload.data) ? payload.data : []
            };
        }
        case actionTypes.FETCH_ALL_FILTERS_FAILURE: {
            return {
                ...state,
                isLoading: false
            };
        }
        case actionTypes.TOGGLE_FILTER_EXPAND_STATE: {
            if (isNilOrEmpty(payload.filterId)) {
                return state;
            }
            return R.assocPath(
                ["selectedFilters", payload.filterId, "isExpand"],
                payload.expandState || false,
                state
            );
        }
        case actionTypes.INITIALIZE_SELECTED_FILTER_STATE: {
            if (isNilOrEmpty(payload.data)) {
                return state;
            }
            return R.assocPath(["selectedFilters"], payload.data, state);
        }
        case actionTypes.HANDLE_FILTER_OPTION_CLICK: {
            if (isNilOrEmpty(payload.filterId)) {
                return state;
            }
            return R.assocPath(
                ["selectedFilters", payload.filterId, "filterToApply"],
                payload.filtersToApply,
                state
            );
        }
        case actionTypes.UPDATE_SEARCH_TERM: {
            return {
                ...state,
                searchKeyword: !R.isNil(payload.data) ? payload.data : ""
            };
        }

        default:
            return state;
    }
}
