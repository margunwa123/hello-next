import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  // it should not be a react component
  res.setHeader("Set-Cookie", "areyouprogrammer=true;");
  res.send({ test: "test" });
}
