import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const getPlacesOfInterestInfo=async(req,res)=>{
    const {cityId} = req.params
   const result= await prisma.points_of_interest.findMany({
        where:{
            city_id: cityId
        }
       });

       res.status(200).json(result)
}

export const markPlaceOfInterestAsVisited=async (req,res)=>{

  try {
    const {order_in_day,images,poi_id,trip_id} = req
     const result = await  prisma.trip_itinerary.create({
          data:{
            order_in_day,
            images,
            poi_id,
            trip_id
          }
        });

        res.status(200).json(result)
  } catch (error) {
    throw new Error(error.Error);
    
  }
        
  }


