const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

//untuk membaca file .env
dotenv.config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT;
const todoRoutes = require("./routes/todo");
const middlewareLogReq = require("./middleware/logs");

app.use(express.json());

app.use(middlewareLogReq);

app.use("/todo", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});