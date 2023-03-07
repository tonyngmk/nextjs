import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

export async function getPosts(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = await prisma.post.findMany();
        return res.status(200).json(res)
    } catch(error) {
        return res.status(500).json(error)
    }
}
