
import express from "express";
import app from './index'

const port = 8008

app.listen(port, () => {
  console.log(`serveur http://localhost:${port}`);
});
