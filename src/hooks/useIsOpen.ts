import { useCallback, useState } from 'react';

const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return {
    open,
    close,
    toggle,
  };
};

export default useIsOpen;
