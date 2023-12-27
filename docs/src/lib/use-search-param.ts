import React from 'react';

export function useSearchParam(
  key: string,
  defaultValue: string,
): [string, React.Dispatch<string>] {
  const [value, setValue] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return (
        new URLSearchParams(window.location.search).get(key) || defaultValue
      );
    }

    return defaultValue;
  });

  // Sync the value to the URL
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);

      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }

      window.history.replaceState({}, '', url.toString());
    }
  }, [value]);

  return [value, setValue];
}
