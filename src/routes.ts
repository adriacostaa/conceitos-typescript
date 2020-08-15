import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'adria@email.com', 
        password: '12345'
    });
    response.json({ message: 'Hello World'});
}