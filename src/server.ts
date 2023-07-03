import express, { Request, Response } from 'express';

const app = express();
const port = 5500;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port 5500`);
});
