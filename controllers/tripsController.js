import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const  getAllUserTrips=async(userId)=>{
    await prisma.trips.findMany({
        where:{
            user_id : userId
        }
    })
}


export const createNewTrip =
    async (req,res)=>{

      const  {name,start_date,end_date,userId,budget,currency} =req
        prisma.trips.create({
            data: {
              name: name,
              start_date: start_date,
              end_date: end_date,
              user_id:userId,
              budget:budget,
              currency: currency
            },
          })
    }
