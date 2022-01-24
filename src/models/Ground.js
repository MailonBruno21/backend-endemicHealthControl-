import  mongoose  from "mongoose";

const groundSchema = new mongoose.Schema(
    {
        landNumber: {
            type: Number,
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
        district: {
            type: Object,
            default:{}
        },
        reference: {
            name:{
                type: String,
            },
            _id: {
                type: String
            }
        },
        street: {
            name:{
                type: String,
            },
            _id: {
                type: String
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
        groundSequence: {          
            type: Number
        },

        inspectionsDate: {
            inspection:{
                type: Number,
            },
            _id: {
                type: String
            }
        },

        landItens:{
            residents: {
                type: Number
            },
            landType:{
                type: String
            },
            a1: {
                type: Number
            },
            a2: {
                type: Number
            },
            b: {
                type: Number
            },
            c: {
                type: Number
            },
            d1: {
                type: Number
            },
            d2: {
                type: Number
            },
            e: {
                type: Number
            },
            maggot: {
                type: Boolean
            }           

        }

    },

    {
        timestamps: true
    }
)

export default mongoose.model('Ground', groundSchema)