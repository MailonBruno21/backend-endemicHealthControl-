import  mongoose  from "mongoose";

const countySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        uf: {
            type: String,
            required: true
        },
        dateCreate: {
            type: Date,
            required: true
        }
    },

    {
        timestamps: true
    }
)