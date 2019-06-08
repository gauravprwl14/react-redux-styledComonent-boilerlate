import { combineReducers } from "redux";
// import { reducer as toastrReducer } from "react-redux-toastr";
import homeReducer from "./home.reducer";

export default combineReducers({
    // toastr: toastrReducer,
    homeReducer
    // coachReducer,
    // boogieReducer,
    // dashboardReducer,
    // reconnectionReducer,
    // sensorTrendingForGraphReducer
});
