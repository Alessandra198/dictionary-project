import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images"
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [image, setImage] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleResponseImages(response) {
    setImage(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "cb4440cc8b49o2e10d5a63f3ecftcafe";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let apiUrlImages = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

    axios.get(apiUrlImages).then(handleResponseImages);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word..."
          className="input-search"
          onChange={handleKeyword}
        />
        <input type="submit" value="Search" className="input-button" />
      </form>
      <div className="hint">suggested words: sunset, beach, book, forest</div>
      <Results results={results} />
      <Images image={image} />
    </div>
  );
}
