import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.scss";
import jwt from "jsonwebtoken";
import Link from "next/link";

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

export default function Home() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [message, setMessage] = useState("");

  async function submitForm() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => {
      return t.json();
    });

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log(json);
      setMessage(
        `Welcome bro ${json.username} and you are ${
          json.admin ? "an admin" : "not an admin"
        }`
      );
    } else {
      setMessage("something is wrong");
    }

    const res2 = await fetch("/api/secret", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }).then((t) => {
      return t.json();
    });

    console.log(res2);
  }

  return (
    <div>
      <h1>{message}</h1>
      <form>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="button" value="Login" onClick={submitForm} />
      </form>
      <Link href="/test">test</Link>
    </div>
  );
}
