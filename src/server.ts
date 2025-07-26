import express from "express";
import dotenv from "dotenv";
dotenv.config();

//port de l'app
const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server en marche sur le port ${port}`);
});
