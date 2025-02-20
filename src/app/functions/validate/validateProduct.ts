interface ProductValidateProps{
   title: string;
   category: string | undefined;
   description: string | undefined;
   image1: string;
   image2: string;
   image3: string;
   image4: string;
}

export function validateProduct({image1, title, category}: ProductValidateProps){

    const message = []

    if(image1 === '' ){
       message.push('Selecione pelo menos uma imagem')
    }
    if(category === '' ){
       message.push('O campo categoria não pode estar vazio!')
    }
 
   if(title.length < 6){
    message.push('O título tem que ter mais de 5 caractéres!')
   }

   return { message };

}

