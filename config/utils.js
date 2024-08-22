import dotenv from 'dotenv'
dotenv.config()

export async function asyncfnc(fn){
    try{
      const result =  await fn 
      return result
    }catch(err){
        console.log(err)
        throw new Error(err.Error)
    }
    
}