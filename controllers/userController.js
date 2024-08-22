import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const createNewUser =async (req,res)=>{
   const {username,password,first_name,last_name} = req
    return await prisma.users.create({
        data: {
            username,password,first_name,last_name
          },
    })
    
} 
export const userLogin =()=>{

} 