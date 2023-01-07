import { Express } from 'express'
type Config = {
  host?: string;
  port?: number;
  log?: any;
};

export const listen = (
  app: Express,
  { host = "localhost", port = Number(process.env.PORT), log = console.log }: Config = {}
) => {
  app.listen({ port }, () =>
    log(`🚀 Server ready at http://${host}:${port}`)
  );
};
