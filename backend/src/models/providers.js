/*
    Campos
        name
        company
        email
        phone
        address
        isActive
*/

    import { Schema, model } from "mongoose";

const providersSchema = new Schema({
    name: {
        type: String
    },
    company: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    isActive: {
        type: Boolean
    }
}, {
    timestamps: true,
    strict: false // False para poder agregar más campos a la colección
})

export default model("providers", providersSchema)