"use server"
interface FetchDataProps {
    url: string,
    data: {
        name?: FormDataEntryValue | null;
        email?: FormDataEntryValue | null;
        password?: FormDataEntryValue | null;
        image?: FormDataEntryValue | null
    },
    method: string
}
async function FetchData({url, data, method}: FetchDataProps ){
    try {
        const res = await fetch(url, {
          method,
          headers: {'content-type':'application/json'},
          body: JSON.stringify(data)
         })
         if(res.ok){
          console.log("Usuário cadastrado com sucesso")
         }
       } catch (error) {
        console.log(error)
        
       }
}

export {FetchData}