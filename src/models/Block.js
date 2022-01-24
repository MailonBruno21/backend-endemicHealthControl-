import  mongoose  from "mongoose";

const blockSchema = new mongoose.Schema(
    {
        blockNumber: {
            type: Number,
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
        reference: {
            name:{
                type: String,
                required: true
            },
            _id: {
                type: String,
                required: true
            },
        },
        mainStreet: {
            name:{
                type: String,
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

export default mongoose.model('Block', blockSchema)