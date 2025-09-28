
import express from "express";
import app from './index'
import chemin from './routes/UsersRoute'


const port = 3000

app.get('/', (req, res) => {
  res.send('Votre page de bienvenue ');
});
 app.use('/users',chemin)

app.listen(port, () => {
  console.log(`serveur http://localhost:${port}`);
});
