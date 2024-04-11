"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter((count) => count + 1)}>
        You clicked this button {counter} times.
      </button>
    </div>
  );
}
