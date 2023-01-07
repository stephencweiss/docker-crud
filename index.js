const express = require('express');
// import { createSession } from "./session";
// import { addCors } from "./cors";
// import { listen } from "./listen";

// type Config = {
//   host?: string;
//   port?: number;
//   log?: any;
// };

const listen = (
  app,
  { host = "localhost", port = 4000, log = console.log } = {}
) => {
  app.listen({ port }, () =>
    log(`🚀 Server ready at http://${host}:${port}`)
  );
};

const createApp = () => {
  const app = express();
  // createSession(app);
  // addCors(app);
  listen(app);
};

createApp();