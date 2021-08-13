import Head from 'next/head';
import { FormEvent, useCallback, useState } from 'react';
import { SearchResults } from '../componentes/SearchResults';

export default function Home() {
  const [seacrh, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!seacrh.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${seacrh}`);

    const data = await response.json();

    setResults(data);
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <Head>
        <title>React Otmizado</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1>Search</h1>
        <form onSubmit={handleSearch}>
          <input type='text' value={seacrh} onChange={(e) => setSearch(e.target.value)} />

          <button type='submit'>Buscar</button>
        </form>

        <SearchResults results={results} addToWishList={addToWishList} />
      </div>
    </div>
  );
}
