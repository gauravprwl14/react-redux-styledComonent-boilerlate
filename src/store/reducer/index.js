import { combineReducers } from "redux";
// import { reducer as toastrReducer } from "react-redux-toastr";
import homeReducer from "./home.reducer";
import showContactReducer from "./showContact.reducer";
import filterReducers from "./filter.reducer";

export default combineReducers({
    // toastr: toastrReducer,
    home: homeReducer,
    showContact: showContactReducer,
    filters: filterReducers
    // coachReducer,
    // boogieReducer,
    // dashboardReducer,
    // reconnectionReducer,
    // sensorTrendingForGraphReducer
});
