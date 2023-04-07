import { login, signup, createContact } from "../utils/firebase.js";

export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        error: {
          code: "server/bad-request",
          message: "Missing arguments in the request body.",
        },
      });
    }

    const user = await login(email, password);
    if (user.error) {
      return res.status(401).json(user.error);
    }

    res.json(user);
  } catch (error) {
    res.json(error);
  }
}

export async function userSignup(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(401).json({
        error: {
          code: "server/bad-request",
          message: "Missing arguments in the request body.",
        },
      });
    }

    const createdUser = await signup(username, email, password);
    if (createdUser.error) {
      return res.status(401).json({ error: createdUser.error });
    }

    res.status(201).json(createdUser);
  } catch (error) {
    res.json(error);
  }
}
