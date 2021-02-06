import { useRouter } from "next/router";
import React from "react";
// this file catch a custom path

function Todo() {
  const router = useRouter();
  return <div>{router.query.name}</div>;
}

export default Todo;
