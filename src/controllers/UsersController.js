import User from "../models/User"




class UsersControllers{

    async index(req, res){
        try {
            const user = await User.find()
            return res.status(201).json(user)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async show(req, res){

        try {
            const { id } = req.params
            const user = await User.findById(id)

            if(!user){
                return res.status(404).json()
            }
            return res.status(201).json(user)

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async create(req, res){
        try{
            const { nome, email, phoneNumber, cpf, password, registrationDate, bithDate, admin, agent } = req.body
            
            
            const user = await User.findOne({$or: [{ cpf, email }]})
            
            if (user) {
                return res.status(422).json({ message: `User ${email} already exists.` })
            }
            

            //CRIPTOGRAFAR SENHA

            const newUser = await User.create({nome, email, phoneNumber, cpf, password, registrationDate, bithDate, admin, agent})

            return res.status(201).json(newUser)

        }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async update(req, res){
        try{
            const { id } = req.params
            const {  nome, email, phoneNumber, cpf, password, bithDate, admin, agent } = req.body

            const user = await User.findById(id)

            if(!user){
                return res.status(404).json()
            }

            //CRIPTOGRAFAR SENHA

            await user.updateOne({ nome, email, phoneNumber, cpf, password, bithDate, admin, agent})

            return res.status(200).json()
            
        }catch(err){
            console.error(err);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async delete(req, res){
        try{
            const { id } = req.params
            const user = await User.findById(id)

            if(!user){
                return res.status(404).json()
            }

            await user.deleteOne()
            
            return res.status(200).json()
        }catch(err){
            console.error(err);
            return res.status(500).json({ error: "Internal server error." })
        }
    }
}


export default new UsersControllers()