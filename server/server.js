const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is live on port ${port}...`);
});
