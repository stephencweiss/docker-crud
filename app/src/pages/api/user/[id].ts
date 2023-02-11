import { NextApiRequest, NextApiResponse } from "next";
import { pool } from 'src/db/pool'

// import prisma from 'src/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const q = await pool.query(`Select * from accounts;`);

  return res.send({res: q.rows});
}
