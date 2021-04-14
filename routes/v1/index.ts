import express, { Request, Response, NextFunction } from 'express';
import UserRoutes from './user.route';

const Route = express();

// Ping Route
Route.get('/ping', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Server PONG' });
});

Route.use('/users', UserRoutes);

export default Route;
