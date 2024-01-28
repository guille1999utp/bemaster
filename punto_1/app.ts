import express from 'express';
import cors from 'cors';
import routeUser from './src/routes/github'

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use(routeUser)


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});