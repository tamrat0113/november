import "./App.css";

import NameTag from "./components/NameTag";
import CounterC from "./components/CounterC";
import CounterF from "./components/CounterF";
import Feed from "./components/Feed";
import Users from "./components/Users";

import NoteBook from "./components/NoteBook/NoteBook";

import NotebookContext from "./context/NotebookContext";

function App() {
  return (
    <div className="App">
      <h1>The App</h1>

      <NotebookContext.Provider value={{ owner: "Dwight", mode: "light" }}>
        <NoteBook />
        <button>Toggle dark mode</button>
      </NotebookContext.Provider>

      {/*
      <Users />
      <Feed />

      <NameTag name="Michael Scott" city="Scranton" />
      <CounterC color="red" />
      <CounterF color="green" /> */}
    </div>
  );
}

export default App;
