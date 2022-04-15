import { Request, Response } from 'express';
import { validateBook } from '../validator';
import { Book } from './get';

export const postBook = (books: Book[]) => (req: Request, res: Response) => {
    const { error } = validateBook(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const book = {
        id: books.length + 1,
        name: req.body.name
    }
    books.push(book)
    res.status(201).send(book)
}