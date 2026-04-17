/*
    Campos
        name
        description
        price
        stock
        categoryId
        isActive
*/

import mongoose, { Schema, model } from "mongoose";

const productsSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    isActive: {
        type: Boolean
    }
}, {
    timestamps: true,
    strict: false // False para poder agregar más campos a la colección
})

export default model("products", productsSchema)