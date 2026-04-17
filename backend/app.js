import express from 'express';
import cookieParser from 'cookie-parser';
import customerRoutes from "./src/routes/customer.js";
import registerCustomerRoutes from "./src/routes/registerCustomer.js";
import employeeRoutes from "./src/routes/employee.js";
import registerEmployeeRoutes from "./src/routes/registerEmployee.js";
import productsRoutes from './src/routes/products.js';
import categoriesRoutes from './src/routes/categories.js';
import ordersRoutes from './src/routes/orders.js';
import providersRoutes from './src/routes/providers.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/customers", customerRoutes);
app.use("/api/registerEmployee", registerEmployeeRoutes);
app.use("/api/registerCustomer", registerCustomerRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/providers", providersRoutes);

export default app;