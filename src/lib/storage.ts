const PREFIX = 'tatoeba:';

export type StorageValue = {
  jwt: string;
};

export type StorageKey = keyof StorageValue;

export const getStorage = <T extends StorageKey>(key: T) => {
  return localStorage.getItem(`${PREFIX}${key}`);
};

export const setStorage = <T extends StorageKey>(
  key: T,
  value: StorageValue[T]
) => {
  localStorage.setItem(`${PREFIX}${key}`, value);
};

export const deleteStorage = <T extends StorageKey>(key: T) => {
  return localStorage.removeItem(`${PREFIX}${key}`);
};
