import { Request, Response } from 'express';

export interface Book {
    id: number;
    name: string;
}

export const getBooks = (books: Book[]) => (req: Request, res: Response) => {
    res.send(books)
}

export const getBook = (books: Book[]) => (req: Request, res: Response) => {
    const book = books.find(book => book.id === parseInt(req.params.id))
    if (!book) {
        return res.status(404).send('Kitob topilmadi !!')
    }
    res.send(book)
}

// app.get('/api/articles/:year/:month', (req: Request, res: Response) => {
//     res.send(req.query)
// })