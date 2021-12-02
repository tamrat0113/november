import React, { useContext } from "react";

import Page from "./Page";

import { NotebookContext } from "./../../context/NotebookContext";

function NoteBook() {
  const notebook = useContext(NotebookContext);

  const handleToggle = () => {
    notebook.toggleMode();
  };

  return (
    <div style={{ padding: "10px", border: "1px solid red" }}>
      the notebook
      <button onClick={handleToggle}>Toggle dark mode</button>
      <Page />
      <Page />
      <Page />
    </div>
  );
}

export default NoteBook;
