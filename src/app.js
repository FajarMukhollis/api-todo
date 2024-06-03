const express = require("express");
const dotenv = require("dotenv");

//untuk membaca file .env
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const todoRoutes = require("./routes/todo.routes");
const middlewareLogReq = require("./middleware/logs");

//untuk mengizinkan middleware request seluruh berupa json
app.use(express.json());

app.use(middlewareLogReq);

app.use("/todo", todoRoutes);
app.use("/todo/:id", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
