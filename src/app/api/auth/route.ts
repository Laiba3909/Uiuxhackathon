import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'session_id=value; HttpOnly; Secure; SameSite=Strict; Path=/');
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
