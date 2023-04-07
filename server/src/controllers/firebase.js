import { missingBody } from "../utils/defaultResponses.js";
import { login, signup } from "../utils/firebase.js";

export async function userLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return missingBody(res);
  }

  const loggedInUser = await login(email, password);
  if (loggedInUser.error) {
    return res.status(401).json(loggedInUser.error);
  }

  res.status(200).json({ loggedInUser: loggedInUser });
}

export async function userSignup(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return missingBody(res);
  }

  const createdUser = await signup(username, email, password);
  if (createdUser.error) {
    return res.status(401).json({ error: createdUser.error });
  }

  res.status(201).json({ createdUser: createdUser });
}
