import { combineReducers } from "redux";
// import { reducer as toastrReducer } from "react-redux-toastr";
import homeReducer from "./home.reducer";
import showContactReducer from "./showContact.reducer";

export default combineReducers({
    // toastr: toastrReducer,
    home: homeReducer,
    showContact: showContactReducer
    // coachReducer,
    // boogieReducer,
    // dashboardReducer,
    // reconnectionReducer,
    // sensorTrendingForGraphReducer
});
