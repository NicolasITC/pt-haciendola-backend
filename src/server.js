import dotenv from "dotenv"
import express from "express"

const port = process.env.PORT || 2000;

const app = express();
app.use(express.json());

//routes
app.get("/", async (req, res) => {
  res.status(200).send("Hello world!");
});

app.post("/", (req, res) => {
  const { name, location } = req.body;
  res.status(200).send({
    message: `YOUR KEYS WHERE ${name}, ${location}`,
  });
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
