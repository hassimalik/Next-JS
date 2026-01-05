"use client";

import { useState } from "react";

export default function ClickText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="p-2 bg-orange-400 rounded-xl" onClick={() => setShow(!show)}>
        {show ? "Hide Text" : "Show Text"}
      </button>
      {show && <p>Hello Jennie 🌸</p>}
    </div>
  );
}
