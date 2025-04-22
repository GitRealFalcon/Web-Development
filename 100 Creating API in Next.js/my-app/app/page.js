"use client"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState([])

  const handleClick = async () => {
    let data = {
      Value: "1200",
      Description: "Tr to Naeem"
    }

    let a = await fetch("api/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })

    let res = await a.json()
    console.log(res);

  }

  async function handleClick2(params) {
    const key = 3; // You can get this from input or state if needed
    const res = await fetch(`/api/add?key=${key}`, {
      method: 'GET'
    });

    const json = await res.json();

    if (json.data) {
      setData(json.data); // for full list
    } else if (json.entry) {
      setData([json.entry]); // wrap single entry in array
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api route DEMO</h1>
      <button className="bg-red-400 p-5" onClick={handleClick}>POST</button>
      <button className="bg-red-400 p-5" onClick={handleClick2}>GET</button>

      <ul>
        {data.map((item) => (
          <li key={item.Key}>
            <strong>Key:</strong> {item.Key},&nbsp;
            <strong>Value:</strong> {item.Value},&nbsp;
            <strong>Description:</strong> {item.Description}
          </li>
        ))}
      </ul>

    </div>
  );
}
