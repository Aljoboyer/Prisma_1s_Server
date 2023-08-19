import { Request, Response } from "express"
import { userService } from "./user.service"

export const userCreateController = async (req: Request, res: Response) => {

    try{
        const result = await userService.createUserService(req.body)
        res.send({result: result, message: 'User created successfully'})
    }
    catch{
        res.send({status: 400, message: 'User Creation Failed'})
    }
}

export const profileCreateController = async (req: Request, res: Response) => {

    try{
        const result = await userService.profileCreateService(req.body)
        res.send({result: result, message: 'Profile created successfully'})
    }
    catch{
        res.send({status: 400, message: 'Profile Creation Failed'})
    }
}

export const getUserController  = async (req: Request, res: Response) => {
    try{
        const result = await userService.userGetService()
        res.send(result)
    }
    catch{
        res.send({status: 400, message: 'User get Failed'})
    }
}