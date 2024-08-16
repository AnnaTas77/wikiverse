import React, { useState } from "react";
import apiURL from "../api";

function Page({ currentPage, setCurrentPage, fetchPages }) {
  const [isEditingPage, setIsEditingPage] = useState(false);

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!isConfirmed) return;

    //send a DELETE request to /wiki/:slug
    await fetch(apiURL + "/wiki/" + currentPage.slug, {
      method: "DELETE",
    });

    await fetchPages();

    // Return to the home page
    setCurrentPage(null);
  };

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
      <button
        onClick={() => {
          setIsEditingPage(!isEditingPage);
        }}
      >
        Update Page
      </button>{" "}
      <button onClick={handleDelete}>Delete Page</button>
    </main>
  );
}

export default Page;
