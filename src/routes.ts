import { Request, Response } from 'express';

export function helloWorld(request: Request, response: Response){
    response.json({ message: 'Hello World'});
}