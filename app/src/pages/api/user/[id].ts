import { NextApiRequest, NextApiResponse } from "next";
import { pool } from 'src/db/pool'

import prisma from 'src/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {id} = req.query;
  console.log({id})
  const q = await pool.query(`Select * from user;`);
try {

  // console.log({prisma})
  const user = await prisma.user.findUnique({
    where: {
      id: String(id),
    },

  });
  console.log({user})
} catch (e){
  console.error(e)
}
  // return res.send({res: user});
  return res.send({r:q.rows})
}
