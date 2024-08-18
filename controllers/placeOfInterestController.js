import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getPlaceOfInterestInfo= async(placeOfInterestId)=>{
    return await prisma.place_of_interest.findUnique({
        where:{
            xata_id: placeOfInterestId
        }
       });
}

export const markPlaceOfInterestAsVisited=async({order_in_day,images,poi_id,trip_id})=>{
    return await prisma.trip_itinerary.create({
      data:{
        order_in_day,
        images,
        poi_id,
        trip_id
      }
    });
}

