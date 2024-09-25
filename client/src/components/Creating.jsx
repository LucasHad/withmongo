import { useState } from "react";

export default function Creating() {
  const [data, setData] = useState({
    name: "",
    age: "",
    userName: "",
    color: "",
  });

  function handle(e) {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function sendData(e) {
    e.preventDefault();
    fetch("http://localhost:8000", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <form>
      <label>Your name</label>
      <input type="text" value={data.name} onChange={handle} name="name" />
      <br />
      <br />
      <label>Your age</label>
      <input type="number" value={data.age} onChange={handle} name="age" />
      <br />
      <br />
      <label>Your userName</label>
      <input
        type="text"
        value={data.userName}
        onChange={handle}
        name="userName"
      />
      <br />
      <br />
      <label>Your favorite color</label>
      <input type="text" value={data.color} onChange={handle} name="color" />
      <br />
      <button onClick={sendData}>send</button>
    </form>
  );
}
