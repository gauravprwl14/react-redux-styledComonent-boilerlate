import { all } from "redux-saga/effects";
import showContactSaga from "./showContact.saga";
import filterSaga from "./filter.saga";

export const tasks = [...showContactSaga, ...filterSaga];

export default function* root() {
    // effects
    yield all(tasks);
}
