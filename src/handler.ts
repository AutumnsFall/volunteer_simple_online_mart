import { Request, Response } from 'express';

export const createProductGetHandler = (req: Request, res: Response) => {
    res.render('createProduct');
};

export const createProductPostHandler = (req: Request, res: Response) => {
    console.log(req.body);
    ///// forgot name attribute in form

    res.send('Product created');
};

export const helloWorldHandler = (req: Request, res: Response) => {
    res.send('Hello, World!');
};
