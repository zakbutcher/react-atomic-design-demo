import { LocalStorage } from 'utils';

describe('utils', () => {
  describe('Local Storage', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    beforeEach(() => {
      setItemSpy.mockClear();
    });

    it('Sets Valid Storage Item', () => {
      const testObj = {
        key: 'valid-key',
        value: 'value',
      };
      LocalStorage.setLocalStorage(testObj);

      const storedValue = LocalStorage.getLocalStorage('valid-key');

      expect(setItemSpy).toHaveBeenCalledWith('valid-key', JSON.stringify('value'));
      expect(storedValue).toEqual(testObj);
    });

    it('Does Not Set Invalid Storage Item', () => {
      LocalStorage.setLocalStorage({
        key: 'invalid-key',
        value: null,
      });

      const storedValue = LocalStorage.getLocalStorage('invalid-key');

      expect(setItemSpy).not.toHaveBeenCalled();
      expect(storedValue).toEqual(LocalStorage.nullStorage);
    });
  });
});
