import  mongoose  from "mongoose";

const districtSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        county: {
            name:{
                type: String,
                require: true
            },
            _id:{
                type: String,
                require: true
            }
        },
        block: {
            blockNumber:{
                type: Number,
            },
            _id: {
                type: String
            }
        },
        reference: {
            name:{
                type: String,
            },
            _id: {
                type: String
            }
        },
        ground: {
            type: Object,
            default:{}
        }
    },

    {
        timestamps: true
    }
)

export default mongoose.model('District', districtSchema)