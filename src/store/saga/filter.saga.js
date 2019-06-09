// import { takeLatest, put, select, take, cancel, fork, call } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";
import actionTypes from "../constants";
// import * as filtersService from "../../services/filtersService";
import * as filterModel from "../../model/filter.model";

import fakeDataForFilters from "../../services/fakeData/filtersFakeData";

function* handlerToGetAllFilters(action) {
    try {
        const { payload } = action;
        // const response = yield filtersService.fetchAllFilters();
        const mappedData = filterModel.mapMasterFilterData(fakeDataForFilters.data);
        yield put({
            type: actionTypes.FETCH_ALL_FILTERS_SUCCESS,
            payload: {
                data: mappedData
            }
        });
        if (payload.initializeSelectedFilters) {
            const initialFilterSelectedState = filterModel.initializeFilterSelectedState(
                mappedData
            );
            yield put({
                type: actionTypes.INITIALIZE_SELECTED_FILTER_STATE,
                payload: {
                    data: initialFilterSelectedState
                }
            });
        }
    } catch (err) {
        yield put({
            type: actionTypes.FETCH_ALL_FILTERS_FAILURE,
            payload: {
                error: err.message
            }
        });
    }
}

export default [takeLatest(actionTypes.FETCH_ALL_FILTERS_REQUEST, handlerToGetAllFilters)];
