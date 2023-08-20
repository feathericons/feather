import React from 'react';
import iconsJson from '../../../dist/icons.json';
import tagsJson from '../../../src/tags.json';

const icons = Object.entries(iconsJson).map(([name, svg]) => {
  const tags: Array<string> = tagsJson[name] || [];
  return { name, svg, tags };
});

export function IconGrid() {
  const [query, setQuery] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get('query') || '';
    }

    return '';
  });

  const deferredQuery = React.useDeferredValue(query);

  // Sync the query to the URL
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);

      if (query) {
        url.searchParams.set('query', query);
      } else {
        url.searchParams.delete('query');
      }

      window.history.replaceState({}, '', url.toString());
    }
  }, [query]);

  const results = React.useMemo(() => {
    if (!deferredQuery) {
      return icons;
    }

    return icons.filter(name => {
      return (
        name.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        name.tags.some(tag =>
          tag.toLowerCase().includes(deferredQuery.toLowerCase()),
        )
      );
    });
  }, [deferredQuery]);

  const searchRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (!searchRef.current) return;

      if (event.key === '/') {
        event.preventDefault();
        searchRef.current.focus();
      }
    }

    console.log('adding event listener');

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div>
      <input
        ref={searchRef}
        className="w-full bg-bg px-4 py-3 border-b border-border sticky top-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-border-focus [&::-webkit-search-cancel-button]:appearance-none"
        type="search"
        placeholder={`Search ${icons.length} icons...`}
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))]">
        {results.map(icon => {
          return (
            <li className="w-full aspect-square grid place-items-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
