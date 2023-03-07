import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/script'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const data = await prisma
    } catch(error) {

    }
  }
}

// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }
