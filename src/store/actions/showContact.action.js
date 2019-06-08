import actionTypes from "../constants";

export const fetchShowContactAction = () => {
    return {
        type: actionTypes.FETCH_SHOW_CONTACT_REQUEST,
        payload: {}
    };
};

export default fetchShowContactAction;
