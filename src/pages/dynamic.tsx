import { GetStaticProps } from "next";
import React from "react";

// EXECUTION ON SERVER
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      myFavNum: 4,
    },
  };
};

// EXECUTION ON CLIENT (and server for templating as well)
function Dynamic({ myFavNum }) {
  return <h1>dynamic Number = {myFavNum} </h1>;
}

export default Dynamic;
