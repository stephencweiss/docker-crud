import { pool } from "./pool";

export const createConnection = async (): Promise<void> => {
  try {
    await pool.connect();
    console.log('🚀 Db connected successfully')
  } catch (e) {
    console.error(e)
    throw new Error('Error while connecting to the PG client',);
  }
};