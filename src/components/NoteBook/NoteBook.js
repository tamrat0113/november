import React from "react";

import Page from "./Page";

function NoteBook({ owner, mode }) {
  return (
    <div style={{ padding: "10px", border: "1px solid red" }}>
      the notebook
      <Page owner={owner} mode={mode} />
      <Page owner={owner} mode={mode} />
      <Page owner={owner} mode={mode} />
    </div>
  );
}

export default NoteBook;
