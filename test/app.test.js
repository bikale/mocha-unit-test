const assert = require("assert");
const { sumOfTwoArrays, mySubString } = require("../app.js");

describe("App.js", function () {
  describe("Check the sum of two array", () => {
    it("should return []", function () {
      assert.deepEqual(sumOfTwoArrays([], []), []);
    });
    it("should return [4, 4, 4]", function () {
      assert.deepEqual(sumOfTwoArrays([1, 2, 3], [3, 2, 1]), [4, 4, 4]);
    });
    it("should return [4, 4, 3]", function () {
      assert.deepEqual(sumOfTwoArrays([1, 2, 3], [3, 2]), [4, 4, 3]);
    });
    it("should return [4, 4, 1]", function () {
      assert.deepEqual(sumOfTwoArrays([1, 2], [3, 2, 1]), [4, 4, 1]);
    });
  });

  describe("Return the sub string", () => {
    describe("Boundary check", () => {
      it("should return 'This is awesome'", function () {
        assert.equal(mySubString("This is awesome"), "This is awesome");
      });
      it("should return ''", function () {
        assert.equal(mySubString("This is awesome", -1), "");
      });
      it("should return ''", function () {
        assert.equal(mySubString("This is awesome", 15), "");
      });
      it("should return ''", function () {
        assert.equal(mySubString("This is awesome", 1, 15), "");
      });
      it("should return ''", function () {
        assert.equal(mySubString("This is awesome", 1, 0), "");
      });
      it("should return ''", function () {
        assert.equal(mySubString("This is awesome", 15, 15), "");
      });
    });
    describe("Type check", () => {
      it("should return ''", function () {
        assert.equal(mySubString(1234, 0, 1), "");
      });
      it("should return ''", function () {
        assert.equal(mySubString(true, 0, 1), "");
      });
    });
    describe("Ok", () => {
      it("should return 'T'", function () {
        assert.equal(mySubString("This is awesome", 0, 0), "T");
      });
      it("should return 'e'", function () {
        assert.equal(mySubString("This is awesome", 14, 14), "e");
      });
      it("should return 's is'", function () {
        assert.equal(mySubString("This is awesome", 3, 6), "s is");
      });
      it("should return 'is awesome'", function () {
        assert.equal(mySubString("This is awesome", 5), "is awesome");
      });
    });
  });
});
