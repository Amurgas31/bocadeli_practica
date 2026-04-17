import express from "express";
import employeeController from "../controllers/employeesController.js";

// Usamos Router() de la libreria express para definir los métodos HTTP a utilizar
const router = express.Router();

router.route("/")
    .get(employeeController.getEmployee);

router.route("/:id")
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

export default router;