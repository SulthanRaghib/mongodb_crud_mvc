const express = require("express");
const cors = require("cors");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const config = require("./startup/config");
const winston = require("winston");
const mahasiswaRoutes = require("./routes/mahasiswa-routes");
const err = require("./middleware/error");
const app = express();

require("./startup/db")();
require("./startup/logging")();
require("./startup/validation")();

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(mahasiswaRoutes.routes);
app.use(err);

app.listen(config.port, () =>
  winston.info(`Server has running on uri: http://localhost:${config.port}`)
);
