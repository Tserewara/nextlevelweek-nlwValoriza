import { Request, Response } from 'express';

class HomeController {
    async handle(request: Request, response: Response) {
        
        return response.send(
            "<h1>Next Level Week"
        );
    }
}

export {HomeController};