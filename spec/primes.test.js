const sut = require('../primes.js');
describe("when evaluating if a given number is a prime", () => {
  describe("when the number is a prime", () => {
    test("should return 'true'", () => {
      expect(sut.isPrime(11)).toBe(true);
    });
  });
});