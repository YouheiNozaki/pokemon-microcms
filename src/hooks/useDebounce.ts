import { useState, useEffect } from 'react';

type InputParam = {
  value: string;
  delay: number;
};

export const useDebounce = ({ value, delay }: InputParam) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return { debouncedValue };
};
