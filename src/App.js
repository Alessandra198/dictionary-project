import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
          <h2>What word are you looking for?</h2>
        </header>
        <main>
          <DictionarySearch />
        </main>
        <footer>
          Coded with 💜 by{" "}
          <a
            href="https://github.com/Alessandra198"
            target="_blank"
            rel="noreferrer"
          >
            Alessandra Rinaldo
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/Alessandra198/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
