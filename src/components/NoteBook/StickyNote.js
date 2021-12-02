import React from "react";

function StickyNote({ owner, mode }) {
  return (
    <div style={{ border: "1px solid blue" }}>
      the sticky note Author: {owner} {mode}
    </div>
  );
}

export default StickyNote;
