const express = require('express');
const router = require('./routes');

const app = express();

const { PORT = 3000 } = process.env;

app.use(router);
app.listen(PORT,()=>console.log(`Server started at port ${3000}`));
