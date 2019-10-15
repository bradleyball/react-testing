import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = [
  {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
  }
];

/**
 * Factory function to create a ShallowWrap for the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}  returns the shallow wrapper
 */

const setup = (props = {}) => {
  setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});
