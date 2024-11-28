import { useEffect, type RefObject } from 'react';

const useOnClickOutside = (
  handler: () => void,
  shouldListen: boolean,
  windowRef: RefObject<HTMLElement>,
  triggerRef?: RefObject<HTMLElement>
): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      const target = event.target as Node;
      const windowElement = windowRef.current;
      const triggerElement = triggerRef?.current;

      if (
        windowElement &&
        !windowElement.contains(target) &&
        !(triggerElement && triggerElement.contains(target))
      ) {
        handler();
      }
    };

    const removeListeners = (): void => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };

    if (shouldListen) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    } else {
      removeListeners();
    }

    return () => {
      removeListeners();
    };
  }, [handler, shouldListen, windowRef, triggerRef]);
};

export default useOnClickOutside;
