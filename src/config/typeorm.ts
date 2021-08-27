import {createConnection} from 'typeorm';
import path from 'path';

export async function connect(){
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 5306,
        username: 'admin',
        password: 'admin',
        database: 'graphql',
        entities: [path.join(__dirname, '../entity/**/**.ts')],
        synchronize: true
    });
    console.log('Database is connect');
}

