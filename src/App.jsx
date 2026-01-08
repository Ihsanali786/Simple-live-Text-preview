
import React, { useState } from "react";

function App(){
  const [text,setText]=useState("");

  return(
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Text Live Preview</h1>
      <input type="text"
      placeholder="type something"
      value={text}
      className="font-bold w-1/6 px-2 py-1 mt-6"
      onChange={(e)=>setText(e.target.value)}
      />
      <p className="font-bold w-80 px-2 py-1 mt-6 bg-gray-400 rounded-2xl px-3">{text || "nothing typed yet..."}</p>
      <p className="font-bold px-2 py-1 mt-6">Character count: {text.length}</p>

    </div>
  )
}
export default App