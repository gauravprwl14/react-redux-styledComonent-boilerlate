import * as R from "ramda";
import { isNilOrEmpty } from "../utils/helper";

function schemaToMapFilterValue(value) {
    const res = {};
    if (isNilOrEmpty(value)) {
        return res;
    }
    res.label = value;
    res.value = value;
    res.id = value;

    return res;
}

function schemaToMapFilterObj(filterObj) {
    const res = {
        id: "",
        name: "",
        values: []
    };
    if (isNilOrEmpty(filterObj)) {
        return res;
    }

    res.id = filterObj.name || "";
    res.name = filterObj.name || "";
    res.values = !isNilOrEmpty(filterObj.values)
        ? R.map(schemaToMapFilterValue)(filterObj.values)
        : [];

    return res;
}

export function mapMasterFilterData(filterDataFromApi) {
    let mappedData = [];
    if (isNilOrEmpty(filterDataFromApi)) {
        return mappedData;
    }

    mappedData = R.map(schemaToMapFilterObj)(filterDataFromApi);

    return mappedData;
}

export default mapMasterFilterData;
