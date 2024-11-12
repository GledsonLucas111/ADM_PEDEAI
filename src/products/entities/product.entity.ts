import { Prisma } from '@prisma/client';

export class Product implements Prisma.ProductUncheckedCreateInput {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  userId?: number | null;
}
