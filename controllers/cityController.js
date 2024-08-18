import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCityInfo =async(cityId)=>{
   return await prisma.cities.findUnique(
    {
        where: {
            xata_id: cityId
        }
    }
   );

}