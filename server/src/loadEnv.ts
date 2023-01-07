import * as path from 'path';

import * as dotenv from 'dotenv';
const isProd = process.env.NODE_ENV === 'production'
const envFile = `.env.${isProd ? 'production' : 'development'}`
const envPath = path.resolve(__dirname, '..', envFile);

export const loadEnv = () => dotenv.config({ path: envPath });