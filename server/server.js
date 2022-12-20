const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 8000;
console.log(process.env);

app.listen(port, () => {
  console.log(`server is live on port ${port}...`);
});
