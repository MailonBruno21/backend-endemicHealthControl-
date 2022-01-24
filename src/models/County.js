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
        }
    },

    {
        timestamps: true
    }
)

export default mongoose.model('County', countySchema)