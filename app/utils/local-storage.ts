import { isString, isNumber } from 'utils';

export type TLocalStorageValue = string | string[] | number | {};

export interface ILocalStorageConfig {
  /**
   * [required] How you identify this data
   */
  key: string;
  /**
   * [required] Data to be stored
   */
  value: TLocalStorageValue;
}

const nullStorage: ILocalStorageConfig = {
  key: null,
  value: null,
};

const isInWindow = () => {
  return typeof window !== 'undefined';
};

const isValidObject = (obj: ILocalStorageConfig = nullStorage) => {
  if (!!obj && !!obj.key && !!obj.value) {
    return true;
  }
  return false;
};

const isLocalStorageValue = <TLocalStorageValue>(
  obj: TLocalStorageValue,
): obj is TLocalStorageValue => {
  if (isString(obj) || isNumber(obj)) {
    return false;
  } else if (!!obj && Object.values(obj).length > 0) {
    return !Object.values(obj).some(value => value === null);
  }
  return true;
};

const setLocalStorage = (
  nexTLocalStorageValue: ILocalStorageConfig = nullStorage,
) => {
  if (isInWindow() && isValidObject(nexTLocalStorageValue)) {
    window.localStorage.setItem(
      nexTLocalStorageValue.key,
      JSON.stringify(nexTLocalStorageValue.value),
    );
  }
};

const getLocalStorage = (key: string): ILocalStorageConfig => {
  if (isInWindow()) {
    const value = JSON.parse(window.localStorage.getItem(key));
    return !!value
      ? {
          key,
          value,
        }
      : nullStorage;
  }
  return nullStorage;
};

export const LocalStorage = {
  nullStorage,
  isLocalStorageValue,
  setLocalStorage,
  getLocalStorage,
};
