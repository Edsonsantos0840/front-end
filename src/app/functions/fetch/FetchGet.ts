
async function FetchGet({url}: {url: string} ){
        const res = await fetch(url)
         if(res.ok){
          console.log("Produto retornado com sucesso")
         }

         const product = await res.json() 

         
    
      return {product} 
}

export {FetchGet}