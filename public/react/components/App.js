import React, { useCallback, useEffect, useState } from "react";
import apiURL from "../api";
import Page from "./Page";

const App = () => {
  const [pages, setPages] = useState([]);

  const [currentPage, setCurrentPage] = useState(null);

  // Wrapped function in useCallback instead of useEffect because we will need
  // to call it outside the Effect later after making POST requests.
  const fetchPages = useCallback(async () => {
    const response = await fetch(`${apiURL}/wiki`);
    const pages = await response.json();
    setPages(pages);
  }, []);

  const handleClick = async (event) => {
    event.preventDefault(); // stop the browser from following the link

    const currentSlug = event.target.pathname;

    const response = await fetch(apiURL + currentSlug);

    const page = await response.json();

    setCurrentPage(page);
  };

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  if (currentPage) {
    return <Page currentPage={currentPage} setCurrentPage={setCurrentPage} />;
  }

  return (
    <main>
      <h1 className="title">Wikiverse</h1>
      <p className="subtitle">
        An interesting <span aria-label="library">📚</span>
      </p>
      <ul className="pageList">
        {pages.map((page) => (
          <li className="pageList-item" key={page.id}>
            <a href={`/wiki/${page.slug}`} onClick={handleClick}>
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
