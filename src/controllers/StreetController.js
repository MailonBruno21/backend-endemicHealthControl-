import Street from "../models/Street";
import County from "../models/County"

class StreetController {
    async create(req, res){
        try{
            const { name, county } = req.body
            
            
            const bdCounty= await County.findOne({ county })
           
            if (!bdCounty) {
                return res.status(422).json({ message: `County: ${county} not exists.` })
            }

            const street = await Street.findOne({ name })
           
            if (street) {
                return res.status(422).json({ message: `Street ${name} already exists.` })
            }
            

            const newStreet = await Street.create({name, county: bdCounty})

            return res.status(201).json(newStreet)

        }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}

export default new StreetController()