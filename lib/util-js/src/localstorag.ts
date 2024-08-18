const get = (key: string) => {
  const value = localStorage.getItem(key);
  if (!value) {
    throw new Error("Value not found!");
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    throw e;
  }
};

const set = (key: string, value: any) => {
  if (!value) {
    throw new Error("Value is falsy!");
  }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw e;
  }
};

export const useLocalStorage = () => ({
  set,
  get,
});
