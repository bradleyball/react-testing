import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("returns default initial state of `false when no action is passed", () => {
  const newState = successReducer();
  expect(newState).toBe(false);
});

test("returns state of true upon receiving an action of type `CORRECT_GUESS`", () => {});
