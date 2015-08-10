import { Router } from 'express';

const apiRoutes = Router();

apiRoutes.get('/', (req, res) => {
	res.end('Welcome to api routes');
});

apiRoutes.get('/hello', (req, res) => {
	res.end('hello');
});

export default apiRoutes;