import React, { useCallback, useEffect, useState } from "react";
import apiURL from "../api";
import Page from "./Page";
import Home from "./Home";

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

  return <Home pages={pages} handleClick={handleClick} />;
};

export default App;
