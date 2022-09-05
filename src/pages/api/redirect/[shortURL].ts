import { NextApiRequest, NextApiResponse } from 'next';

export default function redirect(req: NextApiRequest, res: NextApiResponse) {
  const { shortURL } = req.query;
  res.status(200).json({ redirect: shortURL });
}
