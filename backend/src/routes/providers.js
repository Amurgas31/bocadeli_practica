import express from "express";
import providersController from "../controllers/providersController.js";

// Usamos Router() de la libreria express para definir los métodos HTTP a utilizar
const router = express.Router();

router.route("/")
    .get(providersController.getProviders)
    .post(providersController.insertProviders);

router.route("/:id")
    .put(providersController.updateProviders)
    .delete(providersController.deleteProviders);

export default router;