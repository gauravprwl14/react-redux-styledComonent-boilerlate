import actionTypes from "../constants";

export const fetchAllFilters = (initializeSelectedFilters = false) => ({
    type: actionTypes.FETCH_ALL_FILTERS_REQUEST,
    payload: {
        initializeSelectedFilters
    }
});

export const toggleFilterExpandStateAction = (filterId, expandState) => ({
    type: actionTypes.TOGGLE_FILTER_EXPAND_STATE,
    payload: {
        filterId,
        expandState
    }
});

export default fetchAllFilters;
