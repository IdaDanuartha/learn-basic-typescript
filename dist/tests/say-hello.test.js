import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it("it should return Hello danu", function () {
        expect(sayHello('danu')).toBe('Hello danu');
    });
});
