
interface UserValidateProps {    
    name: string;
    email: string;
    password: string;
    confirmPass: string;
    image: string | undefined;
}

export function validateUser({name, email, password, confirmPass}: UserValidateProps){


    const message: string[] = []
 
    if(name === '' ){
        message.push('O campo name ná pode estar vazio!')
     }
    if(email === '' ){
        message.push('O campo email ná pode estar vazio!')
     }

    if(password.length < 8){
     message.push('A senha tem que ter mais de 7 caractéres!')
    }
 
    if(password !== confirmPass){
     message.push("As senhas náo sáo iguais!")
    }
 

   return { message };

}