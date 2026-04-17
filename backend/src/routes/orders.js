import express from "express";
import ordersController from "../controllers/ordersController.js";

// Router() nos ayuda a colocar los métodos
// que tendrá el endpoint

const router = express.Router();

router.route("/")
.get(ordersController.getOrders)
.post(ordersController.insertOrders);

router.route("/:id") //Pide el id para saber que se va a actualizar o eliminar
.put(ordersController.updateOrders)
.delete(ordersController.deleteOrders);

export default router;