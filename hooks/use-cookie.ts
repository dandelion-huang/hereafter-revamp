import { useCallback, useState } from 'react';

import {
  getCookie,
  deleteCookie as removeCookie,
  setCookie,
} from 'cookies-next';
import { type OptionsType } from 'cookies-next/lib/types';

function useCookie(
  cookieName: string
): [
  string | null,
  (newValue: string, options?: OptionsType) => void,
  () => void,
] {
  const [value, setValue] = useState<string | null>(
    () => getCookie(cookieName) ?? null
  );
  const updateCookie = useCallback(
    (newValue: string, options?: OptionsType) => {
      setCookie(cookieName, newValue, {
        ...options,
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      setValue(newValue);
    },
    [cookieName]
  );
  const deleteCookie = useCallback(() => {
    removeCookie(cookieName);
    setValue(null);
  }, [cookieName]);

  return [value, updateCookie, deleteCookie];
}

export { useCookie };
