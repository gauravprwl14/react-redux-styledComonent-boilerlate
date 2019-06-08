import { all } from "redux-saga/effects";
import homeSaga from "./home.saga";

export const tasks = [...homeSaga];

export default function* root() {
    // effects
    yield all(tasks);
}
