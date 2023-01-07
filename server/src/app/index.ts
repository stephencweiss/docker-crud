import * as express from "express";
// import { createSession } from "./session";
// import { addCors } from "./cors";
import { listen } from "./listen";
import { server } from "./server";

export const createApp = () => {
  const app = express();
  server(app)
  // createSession(app);
  // addCors(app);
  listen(app, {port: Number(process.env.PORT)});
};

// Used for automated testing
// if (process.env.REGRESSION_TESTING === 'true') { process.exit(0); }
