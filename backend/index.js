require("dotenv").config();

const app = require("./app");
const { connectToDatabase } = require("./db");

const PORT = process.env.PORT || 3002;

connectToDatabase()
  .then(() => {
    console.log("Db connected");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1);
  });
