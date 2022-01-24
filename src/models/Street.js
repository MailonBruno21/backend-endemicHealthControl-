import  mongoose  from "mongoose";

const streetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        county: {
            name:{
                type: String,
            },
            _id: {
                type: String
            }
        },
        block: {
            number:{
                type: Number,
            },
            _id: {
                type: String
            }
        },
        ground: {
            number:{
                type: Number,
            },
            _id: {
                type: String
            }
        }
    },

    {
        timestamps: true
    }
)

export default mongoose.model('Street', streetSchema)