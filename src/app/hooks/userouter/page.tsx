"use client";

import { useRouter } from "next/navigation";

export default function useRouterPage() {
  const router = useRouter();

  return (
    <div>
      <h1 className="uppercase text-2xl text-center ">useRouter Example</h1>
      <div className="flex items-center justify-center mt-5 gap-6">
        <button className="p-3 transition hover:scale-110 cursor-pointer bg-red-500 rounded-full" onClick={() => router.push("/")}>
          Home
        </button>
        <button className="p-3 bg-green-400 transition hover:scale-110 cursor-pointer rounded-full" onClick={() => router.back()}>Back</button>
      </div>
    </div>
  );
}
