import { Request, Response } from 'express';
import { Book } from './get';

export const delBook = (books: Book[]) => (req: Request, res: Response) => {
    // Kitobnni id si bo'yicha izlab topamiz  
    // Agar topilmasa 404 qaytaramiz
    const book = books.find(book => book.id === parseInt(req.params.id))
    if (!book) {
        return res.status(404).send('Kitob topilmadi !')
    }
    // Agar topilsa uni o'chirib tashlaymiz
    const bookIndex = books.findIndex(book => book.id === parseInt(req.params.id))
    books.splice(bookIndex, 1)
    // Topilgan kitobni qaytarib beramiz
    res.send(book)

}