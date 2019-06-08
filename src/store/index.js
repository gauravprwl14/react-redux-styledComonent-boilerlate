import { createStore, applyMiddleware, compose } from "redux";
// eslint-disable-next-line
import { createLogger } from "redux-logger";
import sagaMiddleware from "../middleware/sagaMiddleware";
import createRootReducer from "./reducer/index";
import createRootSaga from "./saga";
// import { routerMiddleware } from 'connected-react-router'

function configureStore(initializationObj, initialState) {
    const loggerMiddleware = createLogger({ duration: true });
    const middlewares = [
        // routerMiddleware(history),
        sagaMiddleware
    ];

    console.log("%c process.env.APP_ENV ", "background: aqua; color: black", process.env);

    if (process.env.NODE_ENV === "development") {
        console.log("%c sadas ", "background: aqua; color: black");
        middlewares.unshift(loggerMiddleware);
    }

    const enhancer = applyMiddleware(...middlewares);

    const finalCreateStore = compose(enhancer)(createStore);

    // return finalCreateStore(createRootReducer(history), initialState);
    return finalCreateStore(createRootReducer, initialState);
}

const store = configureStore({
    history: {}
});

sagaMiddleware.run(createRootSaga);

export default store;
