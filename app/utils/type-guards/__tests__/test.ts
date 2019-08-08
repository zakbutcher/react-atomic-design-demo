import { isString, isNumber } from 'utils';
import { isArrayOfType } from '..';

describe('Type Guards', () => {
  const aString = 'A string';
  const aNumber = 1;
  const aStringArray = ['A string array', 'Second string in array'];
  const aNumberArray = [1, 2];

  it('isString', () => {
    expect(isString(aString)).toBe(true);
    expect(isString(aNumber)).toBe(false);
  });

  it('isNumber', () => {
    expect(isNumber(aString)).toBe(false);
    expect(isNumber(aNumber)).toBe(true);
  });

  it('isArrayOfType', () => {
    expect(isArrayOfType<string>(aStringArray, isString)).toBe(true);
    expect(isArrayOfType<number>(aNumberArray, isNumber)).toBe(true);

    expect(isArrayOfType<string>(aNumberArray, isString)).toBe(false);
    expect(isArrayOfType<number>(aStringArray, isNumber)).toBe(false);

    expect(isArrayOfType<any>(null, isString)).toBe(false);
    expect(isArrayOfType<any>(aString, isString)).toBe(false);
    expect(isArrayOfType<any>(aNumber, isString)).toBe(false);
  });
});
