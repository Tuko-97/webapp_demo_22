// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLocaleLowerCase()) {
    case 'get':
        const id = req.query.id
      return  res.status(200).json({ status: true, data: {resource: '/polls/${id}/index'} })
      default:
        return res.status(400).json({success: false, error: 'Method not allowed'})
  }
 
}
