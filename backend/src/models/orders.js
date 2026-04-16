/*
    Campos
        clientId
        productsId
        total
        status
        date
*/

import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employees"
    },
    productsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }],
    total: {
        type: Number
    },
    status: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    strict: false // False para poder agregar más campos a la colección
})

export default model("orders", ordersSchema)