import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const getCountryInfo= async (req,res)=>{
    const {countryId} = req.params
   const result = await prisma.countries.findUnique({
     where:{
         xata_id: countryId
     }
    });
    res.status(200).json(result)
 
     
 }
 
export const getAllCountries= 
    async (req,res)=>{
        try {
            const result = await prisma.countries.findMany();
            console.log(result,"this is the result from the fetch")

            res.status(200).json(result) 
        } catch (error) {
            res.status(500).json({error:"failed to fetch error"})
        }
        
     }

   export const getCitiesForCountries = 
     async(req,res)=>{
        try {
            const {countryId} = req.params
          
          const result =   await prisma.cities.findMany(
            {
                where: {
                    contry_id: countryId
                }
            }
           );

           res.status(200).json(result) 
        } catch (error) {
            console.log(error,'this is the error')
            
        }
        
      
      }
