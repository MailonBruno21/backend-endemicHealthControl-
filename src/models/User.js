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
        bithDate: {
            type: Date,
            require: true
        },
        admin: {
            type: Boolean,
            required: true
        },
        agent: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', userSchema)