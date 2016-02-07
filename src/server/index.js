import express from 'express';

const app = express();

app.use('/static', express.static(staticDir));

app.use('/', mainRoute);

export default app;