// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/backend/mongo-client';
import { CarData } from '@/features/domain/dto/CarData';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  errorMessages: string;
  data: CarData[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const client = await clientPromise;
    const db = client.db('BADatenBank');

    const guests = await db.collection('guests').find({}).toArray();

    res.json({
      success: true,
      errorMessages: '',
      data: guests as unknown as CarData[],
    });
  } catch (e) {
    console.error(e);
  }
}