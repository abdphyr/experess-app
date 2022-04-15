import { Request, Response } from 'express';
import { validateBook } from '../validator';
import { Book } from './get';

export const putBook = (books: Book[]) => (req: Request, res: Response) => {
    //Kitobni bazadan izlab topish
    //agar kitob topilmasa 404 qaytarish
    let book = books.find(book => book.id === parseInt(req.params.id))
    let index = books.findIndex(book => book.id === parseInt(req.params.id))
    if (!book) {
        return res.status(404).send('Kitob topilmadi !!')
    }
    //agar kitob topilsa so'rovni validatsiya qilish
    //agar so'rov validatsiyadan o'tmasa 400 qaytarish
    const { error } = validateBook(req.body)

    if (error) {
        return res.status(400).send(error.details[0].message)

    }
    // kitobni  yangilash
    book = { ...book, name: req.body.name }
    if (book) {
        books.splice(index, 1)
        books.splice(index, 0, book)
    }
    // yangilangan kitobni qayrarish
    res.send(book)

}