import express from "express";
import * as bodyParser from "body-parser";
import routes from "./src/routes/routes";

const app = express();
const port = 3000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => res.send("Hello RESTFul API!"));
app.listen(port, () => console.log(`Server started listening to port ${port}`));

module.exports = app;
