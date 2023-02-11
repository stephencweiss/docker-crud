import { Pool, PoolConfig } from 'pg';
import { loadEnv } from '../utils/loadEnv';

loadEnv();

const config: PoolConfig = {
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
  ssl: process.env.NODE_ENV === 'production',
}

export const pool = new Pool(config);
