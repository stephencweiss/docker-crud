import { NextApiRequest, NextApiResponse } from "next";

import prisma from 'src/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const { id } = req.query;
    console.log({ id })

    const user = await prisma.user.findUnique({
      where: {
        id: String(id),
      },

    });
    console.log({ user })
    return res.send({ user, id })
  } catch (e) {
    console.error(e)
  }
}
