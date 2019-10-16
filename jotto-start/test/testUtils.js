import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers";
import { createStore } from "redux";

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState Initial state for store
 * @returns {Store} redux store
 */

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper  Enzyme shallow wrapper
 * @param {string} val Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * A function that takes a components and props to check if it passes the proptypes check
 * @function checkProps
 * @param {Component} component This is the component of which proptypes will be checked
 * @param {Object} conformingProps Props being passed to be checked
 */

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
