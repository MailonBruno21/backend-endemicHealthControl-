import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        nome:{
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phoneNumber: {
            type: Number,
            require: true
        },
        cpf: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        registrationDate:{
            type: Date,
            require: true
        },
        bithDate: {
            type: Date,
            require: true
        }
    }
)

export default mongoose.model('AdminUser', userSchema)