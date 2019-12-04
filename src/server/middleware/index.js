// NOTE: once again overkill, but done for demonstration of
// how I would do it in a real production environment

import bodyParser from "body-parser";

const setupMiddleware = app => {
  app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
};

export default setupMiddleware;
