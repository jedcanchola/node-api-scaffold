import { Router } from 'express';
import { AppController } from '../controllers/index.controller';


export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    const indexController = new AppController();

    router.get('/api/index', indexController.getIndex);


    // Fallback
    router.get('/*', indexController.getErrorPage)

    return router;
  }
}