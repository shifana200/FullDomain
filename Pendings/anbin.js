//re render a component when page size is changed

import React, { useState } from "react";
function Page() {
  const [pageSize, setPageSize] = useState(10);

  console.log("component re-rendered");
  return (
    <div>
      <h3>current page size:{pageSize}</h3>

      <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </div>
  );
}

export default Page;

//create a custom hook to change the case to alternative capital and lower cases
//app.jsx
import React from "react";
import alternateCase from "./customhook";

export default function App() {
  const [text, transform] = alternateCase("hello");

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={() => transform("react hooks")}>change case</button>
    </div>
  );
}

//customhook.jsx
import React, { useState } from "react";

function alternateCase(initial) {
  const [text, setText] = useState(initial);

  const transform = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    setText(result);
  };
  return [text, transform];
}

export default alternateCase;


