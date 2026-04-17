// Creo un array de métodos
const ordersController = {};

// Import el Schema de la colección que vamos a utilizar
import ordersModel from "../models/orders.js";

// SELECT
ordersController.getOrders = async (req, res) => {
    const orders = await ordersModel.find()
    res.json(orders)
};

// INSERT
ordersController.insertOrders = async (req, res) => {
    //#1 - Solicito lo datos a guardar
    const { clientId,
        productsId,
        total,
        status,
        date } = req.body;
    //#2 - Lleno una instancia de mí Schema
    const newOrder = new ordersModel({
        clientId,
        productsId,
        total,
        status,
        date
    })
    //#3 - Guardo en la base de datos
    await newOrder.save()

    res.json({ message: "Order Saved" })
};

// DELETE
ordersController.deleteOrders = async (req, res) => {
    await ordersModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Order Deleted" });
};

// UPDATE
ordersController.updateOrders = async (req, res) => {
    //#1 - Pido los nuevos datos
    const { clientId,
        productsId,
        total,
        status,
        date } = req.body;
    //#2 - Actualizo los datos
    await ordersModel.findByIdAndUpdate(req.params.id, {
        clientId,
        productsId,
        total,
        status,
        date
    }, { new: true }); // Sintaxis para actualizar

    res.json({ message: "Order Updated" })
};

export default ordersController;