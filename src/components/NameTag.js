import React from "react";

function NameTag({ name, city }) {
  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      Hi my name is {name} <br /> {city}{" "}
    </div>
  );
}

export default NameTag;
