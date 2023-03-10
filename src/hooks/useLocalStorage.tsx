export const useLocalStorage = () => {
  const getStorageItem = (key: string) => {
    const isServerSide = typeof window === 'undefined';
    if (isServerSide) return;

    return window.localStorage.getItem(key);
  };

  const setStorageItem = (key: string, value: any) => {
    const isServerSide = typeof window === 'undefined';
    if (isServerSide) return;

    return window.localStorage.setItem(key, JSON.stringify(value));
  };

  const removeStorageItem = (key: string) => {
    const isServerSide = typeof window === 'undefined';
    if (isServerSide) return;

    return window.localStorage.removeItem(key);
  };

  const clearStorage = () => {
    const isServerSide = typeof window === 'undefined';
    if (isServerSide) return;

    return window.localStorage.clear();
  };

  return {
    getStorageItem,
    setStorageItem,
    removeStorageItem,
    clearStorage,
  };
};
