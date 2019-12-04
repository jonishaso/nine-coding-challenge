import express from "express";

import handleErrors from "./handleErrors";
import middleware from "./middleware";
import routes from "./routes";

const app = express();

middleware(app);

/*
  Sets up the routes. I know this challenge only needs a single endpoint,
  but this is how I would build out a larger-size Node.js services
  with many endpoints.
*/
routes(app);

handleErrors(app);

export default app;
