import * as ApiService from "./apiService";

export async function fetchFilters() {
    const apiObject = {
        method: "GET",
        endPoint: `api/static-filters`
    };
    return ApiService.callApi(apiObject);
}

export default fetchFilters;
