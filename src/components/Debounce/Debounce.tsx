import { useState, useEffect } from 'react';

function debounce<T extends (...args: string[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const fetchResults = (searchTerm: string) => {
    console.log(`Fetching results for: ${searchTerm}`);
    setResults([`Result for "${searchTerm}"`]);
  };

  const debouncedFetchResults = debounce(fetchResults, 500);

  useEffect(() => {
    if (query) debouncedFetchResults(query);
  }, [query, debouncedFetchResults]);

  return (
    <div>
      <h1>Debounced Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncedSearch;