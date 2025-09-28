import { NextFunction, Request, Response } from "express";
import { UsersService } from "../services/UsersService";
import  {userCreateSchema,userLoginSchema, entrepriseCreateSchema} from "../validators/validate"


const service = new UsersService

export class UsersController {


    async createUser(req: Request, res: Response){
          const users = userCreateSchema.safeParse(req.body)
            if(!users.success)return res.status(400).json({message :"error", error : users.error.format});
            const a=await service.create(req.body)
            res.status(200).json({
              message:"reussi",
              data:a
            })
    }

    async createEntreprise(req: Request, res: Response){
      const entreprise = entrepriseCreateSchema.safeParse(req.body)
      if(!entreprise.success)return res.status(400).json({message :"error", error : entreprise.error.format});
      try {
        const a = await service.createEntreprise(req.body, req.user!.id)
        res.status(200).json({
          message:"Entreprise créée avec succès",
          data:a
        })
      } catch (error: any) {
        res.status(403).json({message: error.message})
      }
    }

    async getEntreprises(req: Request, res: Response){
      try {
        const a = await service.getAllEntreprises(req.user!)
        res.status(200).json({
          message:"Entreprises récupérées",
          data:a
        })
      } catch (error: any) {
        res.status(500).json({message: error.message})
      }
    }

     async login(req: Request, res: Response){
      const verif = userLoginSchema.safeParse(req.body)
      if(!verif.success) return res.status(401).json({message:"invalide",error: verif.error.format()});
      const a= await service.loginUser(req.body)
      res.status(200).json({
        message :'reussi',
        data:a
      })
     }
    
      
  
      }
    


   