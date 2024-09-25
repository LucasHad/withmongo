import { useEffect } from "react";
import { useState } from "react";

export default function Leaders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/leaders")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>leaders</h1>

      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
