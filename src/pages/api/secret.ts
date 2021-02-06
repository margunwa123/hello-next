import { NextApiResponse, NextApiRequest } from "next";
import jwt from "jsonwebtoken";

const KEY = "asdasdasads";

// Example of route protection using jwt

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  // parse the token with the key
  console.log(token);
  const { admin } = jwt.verify(token, KEY) as { [key: string]: boolean };

  if (admin) {
    res.json({ secret: 12345 });
  } else {
    res.json({ admin: false });
  }
}
