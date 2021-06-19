import React, { useState } from "react";

export default function Counter({ name }) {
  const [number, setNumber] = useState(0);
  const [sentence, setSentence] = useState("");

  return (
    <div>
      <h2>Hello {name}! This is my counter component</h2>
      <div>My sentence: {sentence}</div>
      <div>The current number is {number}</div>

      <input type="text" onChange={(e) => setSentence(e.target.value)} />
      <br />
      <button onClick={() => setNumber(number + 1)}>Increase the number</button>
    </div>
  );
}
