import { createConnection } from "./connect";

/**
 * The function will attempt to make a connection with a sleep between each attempt.
 * This is because when booted together, e.g., via docker, the database may not be ready
 * for a connection immediately.
 */
export const attemptConnect = async (retries = 5): Promise<void> => {
  while (retries) {
    try {
      await createConnection();
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`remaining retries: ${retries}`);
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};
