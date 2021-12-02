import React from "react";

import Page from "./Page";

function NoteBook() {
  return (
    <div style={{ padding: "10px", border: "1px solid red" }}>
      the notebook
      <Page />
      <Page />
      <Page />
    </div>
  );
}

export default NoteBook;
