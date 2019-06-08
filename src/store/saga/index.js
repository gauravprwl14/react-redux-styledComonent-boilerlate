import { all } from "redux-saga/effects";
import showContactSaga from "./showContact.saga";

export const tasks = [...showContactSaga];

export default function* root() {
    // effects
    yield all(tasks);
}
