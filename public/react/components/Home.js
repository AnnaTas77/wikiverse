import React from "react";

function Home({ pages, handleClick }) {
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
}

export default Home;
