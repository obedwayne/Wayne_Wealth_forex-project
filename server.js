// const dotenv = require("dotenv");
const app = require("./server/app");

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`server is live on ${port}`);
});
