// Creo un array de métodos
const providersController = {};

// Import el Schema de la colección que vamos a utilizar
import providersModel from "../models/providers.js";

// SELECT
providersController.getProviders = async (req, res) => {
    const providers = await providersModel.find()
    res.json(providers)
};

// INSERT
providersController.insertProviders = async (req, res) => {
    //#1 - Solicito lo datos a guardar
    const { name,
        company,
        email,
        phone,
        address,
        isActive } = req.body;
    //#2 - Lleno una instancia de mí Schema
    const newProvider = new providersModel({
        name,
        company,
        email,
        phone,
        address,
        isActive
    })
    //#3 - Guardo en la base de datos
    await newProvider.save()

    res.json({ message: "Provider Saved" })
};

// DELETE
providersController.deleteProviders = async (req, res) => {
    await providersModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Provider Deleted" });
};

// UPDATE
providersController.updateProviders = async (req, res) => {
    //#1 - Pido los nuevos datos
    const { name,
        company,
        email,
        phone,
        address,
        isActive } = req.body;
    //#2 - Actualizo los datos
    await providersModel.findByIdAndUpdate(req.params.id, {
        name,
        company,
        email,
        phone,
        address,
        isActive
    }, { new: true }); // Sintaxis para actualizar

    res.json({ message: "Provider Updated" })
};

export default providersController;