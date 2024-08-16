import React, { useState } from "react";
import Form from "./Form";

function Home({ pages, handleClick, fetchPages }) {
  const [isAddingPage, setIsAddingPage] = useState(false);

  const hideForm = () => {
    setIsAddingPage(false);
  };

  return (
    <main>
      <h1 className="title">Wikiverse</h1>
      <p className="subtitle">
        An interesting <span aria-label="library">📚</span>
      </p>

      <button
        aria-expanded={isAddingPage}
        onClick={() => {
          setIsAddingPage(!isAddingPage);
        }}
      >
        Toggle Form
      </button>

      {isAddingPage && <Form hideForm={hideForm} fetchPages={fetchPages} />}

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
}

export default Home;
