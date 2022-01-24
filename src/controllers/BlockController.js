import Block from "../models/Block";
import Reference from "../models/Reference";
import Street from "../models/Street";
import District from "../models/District";


class BlockController {

    async create(req, res){
        try{
            const { blockNumber, district, reference, mainStreet } = req.body
            

            //Verificar se existe um bairro
            const bdDistrict = await District.findOne({ district })
        
            if (!bdDistrict) {
                return res.status(422).json({ message: `District: ${district} not exists.` })
            }
                      
            
            const bdReference = await Reference.findOne({ reference })

            if (!bdReference) {
                return res.status(422).json({ message: `Reference: ${reference} not exists.` })
            }  
            
            const bdMainStreet = await Street.findOne({ street: mainStreet })

            if (!bdMainStreet) {
                return res.status(422).json({ message: `Main Street ${mainStreet} not exists.` })
            }

            const block = await Block.findOne({ blockNumber })

            if (block) {
                return res.status(422).json({ message: `Block:  ${blockNumber} already exists.` })
            }


            const newBlock = await Block.create({ blockNumber, district: bdDistrict, reference: bdReference, mainStreet: bdMainStreet})

            return res.status(201).json(newBlock)

        }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}
    
export default new BlockController()