import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = "asdasdasads";

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }

  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "admin",
        password,
      },
      KEY
    ),
  });
}
