// @flow
import express from 'express';
import shared from '../../shared';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('started 3', shared); // eslint-disable-line no-console
});
