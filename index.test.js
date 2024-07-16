import { getPercents } from "/Users/nastas/Git/module11_tests/src/index";

describe("negative tests for getPercents function", () => {
  it("Enter a negative number as a percentage.", () => expect(getPercents(-10,200)).toBe("В качестве процента передано некорректное число"));
});
describe("positive tests for getPercents function", () => {
    it("Entered a valid (positive) number as a percentage.", () => expect(getPercents(50,89)).toBe("44.5"));
});
describe("positive tests for getPercents function", () => {
    it("Percentage of a negative number.", () => expect(getPercents(25,-100)).toBe("-25"));
});
describe("positive tests for getPercents function", () => {
    it("Getting a percentage greater than 100%.", () => expect(getPercents(300,444)).toBe("1332"));
});
describe("positive tests for getPercents function", () => {
    it("Getting a fractional percentage of a number.", () => expect(getPercents(50.5,1010)).toBe("510.05"));
});
describe("Limit values for getPercents function", () => {
    it("Values 0 percent", () => expect(getPercents(0,333)).toBe("0"));
    it("Values 100 percent", () => expect(getPercents(100,54)).toBe("54"));
});
