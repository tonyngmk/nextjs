// import type { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '../../prisma/client'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'GET') {
//     try {
//       // Use Prima to fetch post
//       const data = await prisma.post.findMany()
//       return res.status(200).json(data)

//     } catch(error) {
//       return res.status(500).json(error)
//     }
//   }
// }

// // export async function GET(request: Request) {
// //   return new Response('Hello, Next.js!')
// // }
