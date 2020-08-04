import express, { response } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ Message: "hello Word" });
});

app.listen(3333);
