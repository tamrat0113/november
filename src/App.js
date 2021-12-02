import "./App.css";

import NameTag from "./components/NameTag";
import CounterC from "./components/CounterC";
import CounterF from "./components/CounterF";
import Feed from "./components/Feed";
import Users from "./components/Users";

import NoteBook from "./components/NoteBook/NoteBook";

import NotebookContextProvider from "./context/NotebookContext";

function App() {
  return (
    <div className="App">
      <h1>The App</h1>

      <NotebookContextProvider>
        <NoteBook />
      </NotebookContextProvider>

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
