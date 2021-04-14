import express, { Response, Request, NextFunction } from 'express';
import { PrismaClient } from '../../prisma/generated/client';
const db = new PrismaClient();

const Route = express();

Route.get('/', getUser);
Route.post('/', createUser);

interface ApiResponseStructure {
  data: object[] | string | null;
  message: string;
  success: boolean;
}

async function getUser(req: Request, res: Response, next: NextFunction) {
  let users: ApiResponseStructure = {
    data: await db.user.findMany({}),
    message: 'Operation Successful',
    success: true,
  };

  users.data = await db.user.findMany({});
  return res.json(users);
}

async function createUser(req: Request, res: Response, next: NextFunction) {
  let user = req.body;

  const newUser = await db.user.create({
    data: {
      FirstName: 'Folasade',
      LastName: 'Komolafe',
      UserName: 'folly',
    },
  });

  res.json(newUser);
}
export default Route;
