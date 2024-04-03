import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
          <h2>What word do you want to look up?</h2>
        </header>
        <main>
          <DictionarySearch />
        </main>
        <footer>
          Coded with 💜 by <a href="/">Alessandra Rinaldo</a> and{" "}
          <a href="/">open-sourced</a>
        </footer>
      </div>
    </div>
  );
}
