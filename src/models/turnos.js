import { Schema, model } from "mongoose";

const turnoSchema = new Schema({
    veterinario: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true,
    },
    detalleCita: {
        type: String
    },
    paciente: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    }
})

const Turno = model("turno", turnoSchema);

export default Turno;