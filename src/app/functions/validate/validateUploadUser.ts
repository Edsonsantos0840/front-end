
interface UserValidateProps {    
    name: string;
    email: string;
    image: string | undefined;
}

export function validateUploadUser({name, email}: UserValidateProps){
    const message: string[] = []
 
    if(name === '' ){
        message.push('O campo name ná pode estar vazio!')
     }
    if(email === '' ){
        message.push('O campo email ná pode estar vazio!')
     }

   return { message };

}