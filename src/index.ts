import express from 'express';
import chemin from './routes/UsersRoute'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Votre page de bienvenue ');
});

app.use('/users',chemin)

export default app;
