import express, { Request, Response } from "express";
import cors from 'cors';

const routes = (app: any) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send({ title: "Home page Test Json" });
  });

  app
  .use(cors())
  .use(express.json())
};

export default routes;