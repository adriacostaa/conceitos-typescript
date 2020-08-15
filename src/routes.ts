import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser('Adria', 'adria@email.com', '12345');
    response.json({ message: 'Hello World'});
}