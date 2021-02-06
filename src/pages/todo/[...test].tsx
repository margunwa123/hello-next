// This route catches all deep nested route
// e.g /todo/abc/ad/sd will be resolved to this
// the later part of params (abc, ad, sd) will be compressed into an array called "test"
import { useRouter } from "next/router";
import React from "react";

function Test() {
  const router = useRouter();

  return <div>{router.query.test}</div>;
}

export default Test;
