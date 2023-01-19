const mongoose = require("mongoose");
const winston = require("winston");

module.exports = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://127.0.0.1:27017/uas_big_data", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => winston.info("Connected to MongoDB"))
    .catch((err) => winston.error(err.message, err));
};
