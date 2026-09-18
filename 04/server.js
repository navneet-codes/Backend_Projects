require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const Port = 3000;

connectDB();

app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});
