import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, startValue: T) {
  // 1. state: first, try to load from localStorage
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : startValue;
  });

  // 2. every time value changes, save it
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // 3. give back the same pair useState does
  return [value, setValue] as const;
}