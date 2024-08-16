import React from "react";

function Page({ currentPage, setCurrentPage }) {
  return (
    <main>
      <a
        href="/"
        handleClick={(event) => {
          event.preventDefault();
          setCurrentPage(null);
        }}
      >
        Home
      </a>
      <h1>{currentPage.title}</h1>
      <p>
        <b>Author: </b> {currentPage.author.name}
      </p>
      <p>
        <b>Published: </b>
        {new Date(currentPage.createdAt).toLocaleDateString()}
      </p>
      <p>
        <b>Tags</b>
      </p>
      <ul>
        {currentPage.tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default Page;
