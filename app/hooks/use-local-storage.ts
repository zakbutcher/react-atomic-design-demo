import { useEffect } from 'react';
import { LocalStorage, ILocalStorageConfig, TLocalStorageValue } from 'utils';

/**
 * Hook for getting and setting local state using a key + value pair
 */
export const useLocalStorage = (
  initialStorage: ILocalStorageConfig = LocalStorage.nullStorage,
) => {
  const setLocalStorage = (key: string, value: TLocalStorageValue) =>
    LocalStorage.setLocalStorage({ key, value });
  const getLocalStorage = (key: string) => LocalStorage.getLocalStorage(key);

  useEffect(() => {
    if (LocalStorage.isLocalStorageValue(initialStorage.value)) {
      LocalStorage.setLocalStorage(initialStorage);
    }
  }, [initialStorage]);

  return {
    setLocalStorage,
    getLocalStorage,
  };
};
