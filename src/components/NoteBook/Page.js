import React from "react";

import StickyNote from "./StickyNote";

function Page({ owner, mode }) {
  return (
    <div style={{ padding: "10px", border: "1px solid green" }}>
      the page
      <StickyNote owner={owner} mode={mode} />
    </div>
  );
}

export default Page;
