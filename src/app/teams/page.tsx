"use client";
import { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="font-serif ml-4 mt-4 text-center text-2xl">
      Team Page <br />
      <div className="flex  justify-center mt-4 gap-3">
        <button className="bg-orange-600  text-black text-sm p-3 transition transform hover:scale-120 rounded-xl">
          Count
        </button>
        {"  "}
        <button
          className="bg-[green] px-3 text-black  transition transform hover:scale-120 rounded-xl"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div>
    </div>
  );
};

export default page;
