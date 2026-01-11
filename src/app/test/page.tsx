"use client"
import { useEffect } from "react";
import TestButton from "../components/TestButton";

export default function TestPage() {
  useEffect(()=>{
    console.log("component mounted")
  },[])
  return (
    <>
      <h1>I am server component</h1>
      <TestButton />
    </>
  );
}
