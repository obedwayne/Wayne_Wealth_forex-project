const app = require('./app');

const port = 8000;

app.listen(port, () => {
  console.log(`server is live on port ${port}...`);
});
