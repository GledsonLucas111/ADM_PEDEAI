import { IsNumber, IsString } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  price: string;
  @IsString()
  image: string;
  @IsString()
  category: string;
  @IsNumber()
  authorId?: number;
}
