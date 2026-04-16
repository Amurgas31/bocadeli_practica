import express from 'express';
import cookieParser from 'cookie-parser';
import customerRoutes from "./src/routes/customer.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/customers", customerRoutes);

export default app;