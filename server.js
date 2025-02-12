import express from "express";
import morgan from "morgan";

const print = console.log;
const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello There!');
});

app.listen(3000, () => print('Listening on port 3000'));
