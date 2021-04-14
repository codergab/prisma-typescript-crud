import express from 'express';
import Routes from './routes/v1';
import RoutesV2 from './routes/v2';

const server = express();
server.use('/api/v1/', Routes);
server.use('/api/v2/', RoutesV2);

server.listen(3050, () => {
  console.log('App Running on 3050');
});
