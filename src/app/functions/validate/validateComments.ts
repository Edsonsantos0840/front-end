export function validateComments(comments: FormDataEntryValue | null){

    const message = []

    if(comments === '' ){
       message.push('O campo categoria não pode estar vazio!')
    }


   return { message };

}