import { attemptConnect } from "./db/db";
import { createApp } from "./app/";

export const start = async () => {
  attemptConnect();
  createApp();
};
start()

