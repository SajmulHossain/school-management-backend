import express from "express";
import { router } from "./routes/index.route";
import { globalErrorHandle } from "./middlewares/globalErrorHandle";

const app = express();

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.json({ message: "School Management Server" });
});

app.use(globalErrorHandle);

export default app;
