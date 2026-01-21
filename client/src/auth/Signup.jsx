import React, { useState } from "react";

function Signup() {
  const [n, setN] = useState("test");
  const [e, setE] = useState("test@gmail.com");
  const [p, setP] = useState("password");

  async function submitHandler() {
    const objData = {
      name: n,
      email: e,
      password: p,
    };
    console.log("Object to send:", JSON.stringify(objData, null, 2));

    try {
      const res = await fetch("http://localhost:4040/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objData),
      });

      const dataText = await res.text();

      if (res.ok) {
        alert("Signup successful ✅");
        setN("");
        setE("");
        setP("");
      } else {
        alert("Signup failed ❌");
      }

      console.log("Response:", dataText);
    } catch (err) {
      console.error("Error during signup:", err);
      alert("Signup failed ❌\nCheck console for details");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Create Account</h3>

      <input
        type="text"
        placeholder="Name"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={e}
        onChange={(e) => setE(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={p}
        onChange={(e) => setP(e.target.value)}
      />
      <br />
      <br />
      <button onClick={submitHandler}>Submit</button>
      <br />
      <br />
      <div>Name: {n}</div>
      <div>Email: {e}</div>
      <div>Password: {p}</div>
    </div>
  );
}

export default Signup;

