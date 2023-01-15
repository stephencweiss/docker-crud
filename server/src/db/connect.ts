import { Client, ClientConfig } from 'pg';
import { loadEnv } from '../utils/loadEnv';

loadEnv();

const config: ClientConfig = {
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
}

export const createConnection = async (): Promise<Client> => {
  console.log({config})
  try {
    const client = new Client(config);
    await client.connect();
    console.log('🚀 Db connected successfully')
    return client
  } catch (e) {
    console.error(e)
    throw new Error('Error while connecting to the PG client',);
  }
};