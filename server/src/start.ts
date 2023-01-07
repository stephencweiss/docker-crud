import { connectDb } from "./connectDb";
import { createApp } from "./app/";
import { loadEnv } from "./loadEnv";

export const start = async () => {
  loadEnv();
  connectDb();
  createApp();
};
start()

