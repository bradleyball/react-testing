import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByTestAttr } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrap for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}  returns the shallow wrapper
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {});

test("renders no text when `success` props is false", () => {});

test("renders non-empty congrats message when `success` props is true", () => {});
