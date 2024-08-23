import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

//TODO
export const  getUserTrips=async(req,res)=>{

  try {
    const result = await prisma.trips.findMany({
      where:{
          user_id : "rec_cr4dgf0a5nic5e0atuc0"
      }
  })
  res.status(200).json(result)
  } catch (error) {
    
  }
   
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
