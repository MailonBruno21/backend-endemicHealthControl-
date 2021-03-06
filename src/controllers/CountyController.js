import County from "../models/County"


class CountyController {
    async index(req, res){
        try {
            const county = await County.find()
            return res.status(201).json(county)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async show(req, res){

        try {
            const { id } = req.params
            const county = await County.findById(id)

            if(!county){
                return res.status(404).json()
            }
            return res.status(201).json(county)

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async create(req, res){
        try{
            const { name, uf, registrationDate } = req.body
            
            
            const county = await County.findOne({ name })
            
            if (county) {
                return res.status(422).json({ message: `County ${name} already exists.` })
            }
            

            //CRIPTOGRAFAR SENHA

            const newCounty = await County.create({name, uf, registrationDate})

            return res.status(201).json(newCounty)

        }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async update(req, res){
        try{
            const { id } = req.params
            const { name, uf, registrationDate } = req.body

            const county = await County.findById(id)

            if(!county){
                return res.status(404).json()
            }

            //CRIPTOGRAFAR SENHA

            await County.updateOne({ name, uf, registrationDate })

            return res.status(200).json()
            
        }catch(err){
            console.error(err);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async delete(req, res){
        try{
            const { id } = req.params
            const county = await County.findById(id)

            if(!county){
                return res.status(404).json()
            }

            await County.deleteOne()
            
            return res.status(200).json()
        }catch(err){
            console.error(err);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}

export default new CountyController()