// Creo un array de métodos
const categoriesController = {};

// Import el Schema de la colección que vamos a utilizar
import categoriesModel from "../models/categories.js";

// SELECT
categoriesController.getCategories = async (req, res) => {
    const categories = await categoriesModel.find()
    res.json(categories)
};

// INSERT
categoriesController.insertCategories = async (req, res) => {
    //#1 - Solicito lo datos a guardar
    const { name,
        description,
        isActive } = req.body;
    //#2 - Lleno una instancia de mí Schema
    const newCategory = new categoriesModel({
        name,
        description,
        isActive
    })
    //#3 - Guardo en la base de datos
    await newCategory.save()

    res.json({ message: "Category Saved" })
};

// DELETE
categoriesController.deleteCategories = async (req, res) => {
    await categoriesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Category Deleted" });
};

// UPDATE
categoriesController.updateCategories = async (req, res) => {
    //#1 - Pido los nuevos datos
    const { name,
        description,
        isActive } = req.body;
    //#2 - Actualizo los datos
    await categoriesModel.findByIdAndUpdate(req.params.id, {
        name,
        description,
        isActive
    }, { new: true }); // Sintaxis para actualizar

    res.json({ message: "Category Updated" })
};

export default categoriesController;