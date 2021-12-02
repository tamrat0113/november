import React, { useContext } from "react";

import { NotebookContext } from "./../../context/NotebookContext";

function StickyNote() {
  const { owner, mode } = useContext(NotebookContext);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid blue",
        background: mode === "dark" ? "black" : "yellow",
        color: mode === "dark" ? "white" : "blue",
      }}
    >
      the sticky note Author: {owner} {mode}
    </div>
  );
}

export default StickyNote;
