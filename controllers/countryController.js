import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const getCountryInfo=async(countryId)=>{
   return await prisma.countries.findUnique({
    where:{
        xata_id: countryId
    }
   });

    
}
export const getAllCountries= async()=>{
   return await prisma.countries.findMany();
}