import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "cb4440cc8b49o2e10d5a63f3ecftcafe";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
