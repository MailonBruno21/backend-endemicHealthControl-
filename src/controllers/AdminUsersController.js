import AdminUser from "../models/AdminUser"
import User from "../models/AdminUser"




class AdminUsersControllers{

    async index(req, res){
        try {
            const adminUser = await User.find()
            return res.json(adminUser)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async show(req, res){

        try{
            const { id } = req.params
            const { adminUser } = await AdminUser.find({email: id})

            console.log(id + " -> adminUser")
            if(!adminUser){
                return res.status(404).json()
            }

            return res.status(201).json(adminUser)


        }catch(error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }

    }

    async create(req, res){
        try{
            const { nome, email, phoneNumber, cpf, password, registrationDate, bithDate } = req.body
            
            
            const adminUser = await AdminUser.findOne({$or: [{ cpf, email }]})
            
            if (adminUser) {
                return res.status(422).json({ message: `User ${email} already exists.` })
            }
            

            //CRIPTOGRAFAR SENHA

            const newAdminUser = await AdminUser.create({nome, email, phoneNumber, cpf, password, registrationDate, bithDate})

            return res.status(201).json(newAdminUser)

        }catch (error){
            console.error(error);
            return res.status(500).json({ error: "Internal server error." })
        }
    }

    async update(req, res){

    }

    async delete(req, res){

    }
}


export default new AdminUsersControllers()