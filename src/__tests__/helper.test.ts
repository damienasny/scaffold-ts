import { helper } from "../helper";

describe('helper', () => {
    it('should return 42', () => {
        const result = helper();
        const expected = 42;

        expect(result).toEqual(expected);
    });
});