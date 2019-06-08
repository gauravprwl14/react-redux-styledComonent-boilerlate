import * as R from "ramda";
import asyncAction from "./asyncActionsTypes";
import syncAction from "./syncActionsTypes";

export const createSyncActionType = prefix => {
    const obj = {};
    obj[prefix] = prefix;
    return obj;
};

export const createSyncActions = (...col) =>
    col.reduce((acc, el) => R.merge(acc, createSyncActionType(el)), {});

const actionTypes = {
    ...createSyncActions(...asyncAction),
    ...createSyncActions(...syncAction)
};

export default actionTypes;
