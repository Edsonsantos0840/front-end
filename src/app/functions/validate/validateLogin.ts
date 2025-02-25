interface UserValidateProps {    
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}

export function validateLogin({email, password}: UserValidateProps){

    const message: string[] = []
    if(email === '' ){
        message.push('O campo email ná pode estar vazio!')
     }

    if(password === ''){
     message.push('A senha tem que ter mais de 7 caractéres!')
    }
 
   return { message };

}