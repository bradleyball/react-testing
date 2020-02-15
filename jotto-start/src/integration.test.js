import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  describe("no guessed words", () => {
    let store;
    const initalState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initalState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initalState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for unsuccessful guess", () => {});
  });

  describe("some guessed words", () => {
    test("updates state correctly for unsuccessful guess", () => {});

    test("updates state correctly for unsuccessful guess", () => {});
  });
});
