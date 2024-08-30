import { Request, Response } from 'express';
import { Product } from './database/model/product';
import { createProduct, getAllProducts } from './database/dao/product';

export const createProductGetHandler = (req: Request, res: Response) => {
    res.render('createProduct', {
        product: null,
    });
};

export const createProductPostHandler = async (req: Request, res: Response) => {
    const product: Product = {
        name: req.body.productName,
        price: req.body.productPrice as number,
        description: req.body.productDescription,
        image: req.file?.filename || 'default.jpeg',
    } as Product;
    const result = await createProduct(product);
    res.render('createProduct', {
        product: result,
    });
};

export const showProductsHandler = async (req: Request, res: Response) => {
    const products = await getAllProducts();

    res.render('showProducts', {
        products,
    });
};

export const helloWorldHandler = (req: Request, res: Response) => {
    res.send('Hello, World!');
};
