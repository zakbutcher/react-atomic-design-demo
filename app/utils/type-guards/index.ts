import { IFSA, IRSAA, API_CALL } from 'types';

export const isString = (value: any): value is string => {
  return typeof value === 'string';
};

export const isNumber = (value: any): value is number => {
  return typeof value === 'number';
};

export const isFunction = (value: any): value is Function => {
  return value instanceof Function;
};

export const isArray = (values: any): values is any[] => {
  if (values === null || typeof values === 'undefined') {
    return false;
  } else if (isString(values)) {
    return false;
  } else if (!values.length) {
    return false;
  }
  return true;
};

export const isArrayOfType = <T>(
  values: any,
  identityCheck: (value: T) => boolean,
): values is T[] => {
  if (!isArray(values)) {
    return false;
  }
  return values.every((v: any) => identityCheck(v));
};

export const isApiCall = (action: IRSAA | IFSA): action is IRSAA =>
  action.hasOwnProperty(API_CALL);
