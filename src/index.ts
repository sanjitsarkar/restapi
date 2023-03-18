import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv'
// import connectMongo from "./config/mongodb";
import { itemRoutes } from "./api/routes";
import connectMongo from "./config/mongodb";
import swaggerDocs from "./api/utils/swagger.utils";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: [process.env.CLIENT_URL as string],
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
const PORT = process.env.PORT || 5000;

connectMongo().then(() => {
  app.listen(PORT);
  swaggerDocs(app);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/items", itemRoutes);
app.get("/", (_, res) => {
  res.send("Welcome to Express API");
});