
import Joi from "joi";
export const validateBook = (book: { name: string }) => {
    const bookSchema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return bookSchema.validate(book)
}