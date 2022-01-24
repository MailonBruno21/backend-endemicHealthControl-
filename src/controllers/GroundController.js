import Ground from "../models/Ground"
import Reference from "../models/Reference"
import Street from "../models/Street"
import District from "../models/District"
import County from "../models/County"
import Block from "../models/Block"

class GroundController {
    async create(req, res){
        try{
            const { landNumber, county, district, reference, block, groundSequence, street } = req.body


            
            
            
            const bdCounty= await County.findOne({ county })
           
            if (!bdCounty) {
                return res.status(422).json({ message: `County: ${county} not exists.` })
            }

            const bdDistrict= await District.findOne({ district })
           
            if (!bdDistrict) {
                return res.status(422).json({ message: `District: ${district} not exists.` })
            }

            const bdReference= await Reference.findOne({ reference })
           
            if (!bdReference) {
                return res.status(422).json({ message: `Reference: ${reference} not exists.` })
            }

            const bdStreet = await Street.findOne({ street })
           
            if (!bdStreet) {
                return res.status(422).json({ message: `Street: ${street} not exists.` })
            }

            const bdBlock = await Block.findOne({ block })
           
            if (!bdBlock) {
                return res.status(422).json({ message: `Block: ${block} not exists.` })
            }

            if (groundSequence > 0){
                
                const bdLandNumber = await Ground.findOne({ landNumber })
                
                if (!bdLandNumber) {
                    return res.status(422).json({ message: `Land Number: ${landNumber} not exists.` })
                }
                
                const bdGroundSequence = await Ground.findOne({$and: [{ landNumber, groundSequence }]})
                
                if (bdGroundSequence) {
                    return res.status(422).json({ message: `Sequence: ${groundSequence} already exists.` })
                }
                
                const newGround = await Ground.create({ landNumber, county: bdCounty, district: bdDistrict, reference: bdReference, block: bdBlock, groundSequence, street: bdStreet})
                
                return res.status(201).json(newGround)
            }
            
            console.log(groundSequence + ' teste')
            const bdLandNumber = await Ground.find({ landNumber })
           
            if (bdLandNumber) {
                
                return res.status(422).json({ message: `Land Number: ${landNumber} already exists.` })
            }


            

        
            

            const newGround = await Ground.create({ landNumber, county: bdCounty, district: bdDistrict, reference: bdReference, block: bdBlock, groundSequence, street: bdStreet})
            await District.updateOne({district: bdDistrict}, {$set: {ground: newGround}})

            return res.status(201).json(newGround)

            }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}

export default new GroundController()