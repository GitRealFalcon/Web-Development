"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  const ref = useRef()
   
  return (
    <div>
      <form ref={ref} action={(e)=>{submitAction(e), ref.current.reset()}}>
        <div>
          <label htmlFor="name"></label>
          <input name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="add"></label>
          <input name="add" id="add" type="text" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
