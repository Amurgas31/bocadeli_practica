/*
    Campos:
        name
        lastName
        email
        password
        role
        phone
        salary
        isVerified
        loginAttemps
        timeOut
*/

import mongoose, { Schema, model } from "mongoose";

const employeesSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  salary   : {
    type: Number,
  },
  role   : {
    type: String,
  },
  isVerified: {
    type: Boolean,
  },
  loginAttemps: {
    type: Number,
  },
  timeOut: {
    type: Date
  },
}, {
    timestamps: true, // Guardar el momento exacto en el que se guardo y cuantas versiones tiene 
    strict: false // Para lograr agregar campos nuevos
});

export default model("Employees", employeesSchema);