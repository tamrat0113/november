import React, { useContext } from "react";

import NotebookContext from "./../../context/NotebookContext";

function StickyNote() {
  const { owner, mode } = useContext(NotebookContext);

  return (
    <div style={{ border: "1px solid blue" }}>
      the sticky note Author: {owner} {mode}
    </div>
  );
}

export default StickyNote;
