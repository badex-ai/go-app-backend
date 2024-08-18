import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const  getAllUserTrips=(userId)=>{
    prisma.trips.findMany({
        where:{
            user_id : userId
        }
    })
}


export const createNewTrip =({name,start_date,end_date,userId,budget,currency})=>{
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