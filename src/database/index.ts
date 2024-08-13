import mysql from 'mysql2/promise';

const config = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'test',
};

export const getConnection = async () => {
    return await mysql.createPool({
        host: config.HOST,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DB,
    });
};
