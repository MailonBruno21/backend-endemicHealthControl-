import  mongoose  from "mongoose";

const referenceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        district: {
            name:{
                type: String,
                required: true
            },
            _id: {
                type: String,
                required: true
            }
        },
        block: {
            blockNumber:{
                type: Number,
            },
            id: {
                type: String
            }
        },
        ground: {
            landNumber:{
                type: Number,
            },
            id: {
                type: String
            }
        }
    },

    {
        timestamps: true
    }
)

export default mongoose.model('Reference', referenceSchema)