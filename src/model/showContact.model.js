import { normalize, schema } from "normalizr";
import { isNilOrEmpty } from "../utils/helper";

export const showContactSchema = new schema.Entity("showContact", {}, { idAttribute: "id" });

export const showContactDataForUI = dataFromApi => {
    const defaultObj = {
        entities: {
            showContact: {}
        },
        result: []
    };
    if (isNilOrEmpty(dataFromApi) || isNilOrEmpty(dataFromApi.data)) return defaultObj;
    const normalizedData = normalize(dataFromApi.data, [showContactSchema]);

    return normalizedData;
};
