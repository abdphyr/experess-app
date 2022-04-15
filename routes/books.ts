import express from 'express';
import { delBook } from './delete';
import { getBook, getBooks } from './get';
import { postBook } from './post';
import { putBook } from './put';

const books = [
    { id: 1, name: 'Book1' },
    { id: 2, name: 'Book2' },
    { id: 3, name: 'Book3' },
    { id: 4, name: 'Book4' },
    { id: 5, name: 'Book5' },
    { id: 6, name: 'Book6' },
]

export const booksRouter = express.Router()

booksRouter.get('/', getBooks(books))
booksRouter.get('/:id', getBook(books))

booksRouter.post('/', postBook(books))

booksRouter.put('/:id', putBook(books))

booksRouter.delete('/:id', delBook(books))