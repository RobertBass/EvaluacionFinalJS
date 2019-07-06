const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    nombre: String,
    nota: Number,
    status: Boolean
});

    
module.exports = mongoose.model('estudiantes', TaskSchema);