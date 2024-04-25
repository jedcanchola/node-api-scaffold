import { Request, Response } from "express";



export class AppController {

  constructor() { }

  public getIndex = (req: Request, res: Response) => {
    res.status(200).json({
      msg: 'Index page',
    });
  }

  public getErrorPage = (req: Request, res: Response) => {
    res.status(404).json({ msg: 'Page Not Found' });
  }
}