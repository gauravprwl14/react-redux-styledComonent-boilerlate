import asyncAction from "./asyncActionsTypes";
import syncAction from "./syncActionsTypes";
import { createSyncActions, createAsyncActions } from "../../utils/helper";

const actionTypes = {
    ...createAsyncActions(...asyncAction),
    ...createSyncActions(...syncAction)
};

export default actionTypes;
