import express, { Request, Response } from "express";

export const homeRoter = express.Router();

homeRoter.get('/', (req: Request, res: Response) => {
    res.render('index', {
        title: "My express app",
        greeting: "Assalomu alaykum"
    })
})