import { useEffect } from "react";
import { useState } from "react";

export default function Data() {
  const [data, setData] = useState(null);
  const [num, setNum] = useState("");
  function handle() {
    fetch(`http://localhost:8000/data/${num}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  return (
    <>
      <h1>user data</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handle}>search</button>

      {
        <>
          <p>{data?.name}</p>
          <p>{data?.age}</p>
          <p>{data?.color}</p>
          <p>{data?.userName}</p>
        </>
      }
    </>
  );
}
