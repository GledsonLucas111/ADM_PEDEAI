import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const { authorId } = dto;
    delete dto.authorId;
    const data: Prisma.ProductCreateInput = {
      ...dto,
      author: {
        connect: {
          id: authorId,
        },
      },
    };

    return this.prisma.product.create({
      data,
      include: {
        author: true,
      },
    });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { author: true } });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    const data: Prisma.ProductUpdateInput = {
      ...dto,
    };

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
