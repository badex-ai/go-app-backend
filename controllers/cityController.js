import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const getCityInfo =
    async(req,res)=>{
        
        const {cityId} = req.params
        try {
            const result =  await prisma.cities.findUnique(
                {
                    where: {
                        xata_id: cityId
                    }
                }
               );
       
               res.status(200).json(result)
        } catch (error) {
            throw new Error(error.Error);
            
        }
       
     
     }




