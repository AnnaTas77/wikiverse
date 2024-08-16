import React, { useState } from "react";
import apiURL from "../api";

const Form = ({ hideForm, fetchPages }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
    tags: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Make a POST request to /api/wiki
    const response = await fetch(event.target.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // tells the server to expect a JSON file, otherwise it will treat it as a plain text.
      },
      body: JSON.stringify(data),
      // turns the body object into a JSON string
    });

    // Fetch the updated list of articles
    await fetchPages();

    // Clear the form
    setData({
      title: "",
      content: "",
      name: "",
      email: "",
      tags: "",
    });

    // Hide the form
    hideForm();
  };

  return (
    <form action={`${apiURL}/wiki`} method="POST" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          required={true}
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea
          required={true}
          name="content"
          id="content"
          value={data.content}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <input
          required={true}
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input
          required={true}
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="tags">Tags</label>
        <input
          required={true}
          type="text"
          name="tags"
          id="tags"
          value={data.tags}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">Add page</button>
      </p>
    </form>
  );
};

export default Form;
