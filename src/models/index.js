const mongoose = require("mongoose");
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@graph-node.xgdmf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    console.log("Connect database successfully!");
  } catch (error) {
    console.log(error, "Connect database failure");
  }
})();
