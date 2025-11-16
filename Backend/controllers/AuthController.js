import User from "../models/user.model.js"
import { handleError } from './../helpers/handleError.js';
import bcryptjs from 'bcryptjs'




export const Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const checkuser = await User.findOne({email})
        if(checkuser){
            //user already register
            next(handleError(409,'user already registered.'))
        }

        const hashedPassword = bcryptjs.hashSync(password)
        //register user
        const user = new User({
            name, email, password: hashedPassword
        })

        await user.save();
        res.status(200).json({
            sucess: true,
            message: 'Registration Sucessfull.'
        })
    } catch (error) {
        next(handleError(500, error.message))
        
    }
}



export const Login = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            next(handleError(404,'Invalid login credentials.'))
        }
        const hashedPassword = user.password

        const comparePassword = bcryptjs.compare(password, hashedPassword)
        if(!comparePassword) {
            next(handleError(404,'Invalid login credentials.'))
        }
        
    } catch (error) {
        next(handleError(500, error.message))
        
    }
}