// THIS ROUTE CATCHES ALL ROUTE
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function FruitTemplate() {
  const router = useRouter();

  function takeMeHome() {
    router.replace("/");
  }

  useEffect(() => {
    console.log(router);
  }, []);

  return (
    <div>
      Hello {router.query.name}
      <button onClick={takeMeHome}>Take me home</button>
    </div>
  );
}

export default FruitTemplate;
