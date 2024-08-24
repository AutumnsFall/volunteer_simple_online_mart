import { getConnection } from '..';
import { Product } from '../model/product';

export const getAllProducts = async () => {
    const products = await (
        await getConnection()
    ).execute('SELECT * FROM products');
    return products[0] as Product[];
};

export const createProduct = async (product: Product) => {
    const { name, price, description } = product;
    const result = await (
        await getConnection()
    ).execute(
        'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
        [name, price, description],
    );
    const id = (result[0] as any).insertId;
    product.id = id;
    return product;
};
