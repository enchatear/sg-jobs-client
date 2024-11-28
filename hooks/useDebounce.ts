import { useEffect, useMemo, useRef } from 'react';
import debounce from 'lodash.debounce';
import { FunctionArguments } from '@/types/utility';

const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay = 100
) => {
  const ref = useRef<typeof callback>(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = (...args: FunctionArguments<T>) => {
      ref.current(...args);
    };

    return debounce(func, delay);
  }, [delay]);

  return debouncedCallback;
};

export default useDebounce;
