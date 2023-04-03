import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import firebaseRouter from "./src/routes/firebase.js";

dotenv.config();

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/firebase/", firebaseRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`🟢 Address Book Server listening on http://localhost:${port}`);
});
