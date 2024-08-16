import React, { useCallback, useEffect, useState } from 'react';
import apiURL from '../api';

const App = () => {
  const [pages, setPages] = useState([])

  // Wrapped function in useCallback instead of useEffect because we will need
  // to call it outside the Effect later after making POST requests.
  const fetchPages = useCallback(async () => {
    const response = await fetch(`${apiURL}/wiki`)
    const pages = await response.json()
    setPages(pages)
  }, [])

  useEffect(() => {
    fetchPages()
  }, [fetchPages])

  return (
		<main>
      <h1 className="title">Wikiverse</h1>
			<p className="subtitle">
        An interesting <span aria-label="library">📚</span>
      </p>
			<ul className="pageList">
        {pages.map((page) => (
          <li className="pageList-item" key={page.id}>{page.title}</li>
        ))}
      </ul>
		</main>
  )
}

export default App