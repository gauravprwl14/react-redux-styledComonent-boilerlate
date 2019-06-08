import * as R from "ramda";

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);

export const createSyncActionType = prefix => {
    const obj = {};
    obj[prefix] = prefix;
    return obj;
};
export const createAsyncActionType = prefix => {
    const obj = {};
    obj[`${prefix}_REQUEST`] = `${prefix}_REQUEST`;
    obj[`${prefix}_SUCCESS`] = `${prefix}_SUCCESS`;
    obj[`${prefix}_FAILURE`] = `${prefix}_FAILURE`;
    return obj;
};

export const createSyncActions = (...col) =>
    col.reduce((acc, el) => R.merge(acc, createSyncActionType(el)), {});

export const createAsyncActions = (...col) =>
    col.reduce((acc, el) => R.merge(acc, createAsyncActionType(el)), {});
