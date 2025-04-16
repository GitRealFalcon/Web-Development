import mongoose from 'mongoose';
const employeeSchema = new mongoose.Schema({
    name: String,
    salery: Number,
    language: String,
    city: String,
    isManeger: Boolean
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee