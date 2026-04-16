/*
    Campos
        name
        description
        isActive
*/

import { Schema, model } from "mongoose";

const categoriesSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    isActive: {
        type: Boolean
    }
}, {
    timestamps: true,
    strict: false // False para poder agregar más campos a la colección
})

export default model("categories", categoriesSchema)