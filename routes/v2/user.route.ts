import express, { Response, Request, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

const Route = express();

Route.get('/', getUser);

interface ApiResponseStructure {
  data: object | string;
}

async function getUser(_req: Request, _res: Response, _next: NextFunction) {
  let users: ApiResponseStructure = {
    data: await db.user.findMany({}),
  };

  users.data = await db.user.findMany({});
  return _res.json(users);
}

export default Route;
