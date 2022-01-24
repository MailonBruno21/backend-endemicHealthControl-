import District from "../models/District"
import County from "../models/County"
import Block from "../models/Block"


class DistrictController {

    async create(req, res){
        try{
            const { name, county } = req.body
            
            
            const district = await District.findOne({ name })
           
            
            if (district) {
                return res.status(422).json({ message: `District ${name} already exists.` })
            }

            const bdCounty = await County.findOne({ county })

            if (!bdCounty) {
                return res.status(422).json({ message: `County ${county} not exists.` })
            }  
            


            const newDistrict = await District.create({name, county: bdCounty})

            return res.status(201).json(newDistrict)

        }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}
    
export default new DistrictController()