import Reference from "../models/Reference"
import District from "../models/District"

class ReferenceController {

    async create(req, res){
        try{
            const { name, district } = req.body
            
            
            const bdDistrict = await District.findOne({ district })
           
            
            if (!bdDistrict) {
                return res.status(422).json({ message: `District ${district} note exists.` })
            }
            

            const newReference = await Reference.create({name, district: bdDistrict})

            return res.status(201).json(newReference)

        }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}
    
export default new ReferenceController()