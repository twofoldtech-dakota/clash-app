// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //res.status(200).json({ name: 'John Doe' })
  try {
    console.log('test')
    const clanTag = '#22vjyvv2r';
    const data = await fetch(`https://api.clashofclans.com/v1/clans/${clanTag}`, {
      method: "GET",
      headers: {"Authorization": `Bearer ${process.env.API_TOKEN}`},
    });   

    res.status(200).json({data});

  } catch (error: unknown) {
    let message;
  if (error instanceof Error) message = error.message;
  else message = String(error)
    console.error(error);
    return res
      .status(500)
      .json({ error: { statusCode: 500, message: message } })  }
}
