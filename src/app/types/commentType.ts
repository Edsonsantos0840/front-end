export interface CommentProps {
    _id: string ,
    comments: string ,
    user: {
        _id: string,
        name: string,
        image: string,
    },
    product: string,
    createdAt?: Date
    updatedAt?: Date
}