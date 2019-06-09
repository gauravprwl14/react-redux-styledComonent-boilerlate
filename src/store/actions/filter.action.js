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
export const handleFilterOptionClick = (filterId, selectedFilterOptionsArr) => ({
    type: actionTypes.HANDLE_FILTER_OPTION_CLICK,
    payload: {
        filterId,
        filtersToApply: selectedFilterOptionsArr
    }
});
export const updateSearchKeyword = searchKeyWord => ({
    type: actionTypes.UPDATE_SEARCH_TERM,
    payload: {
        data: searchKeyWord
    }
});
