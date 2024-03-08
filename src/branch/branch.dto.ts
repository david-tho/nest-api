import { Branch } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class newBranchDto implements Pick<Branch, 'name' | 'imageUrl'> {
  @IsNotEmpty({ message: 'Please enter a name' })
  @IsString({ message: 'Please enter a valid name' })
  name: string;

  @IsOptional()
  @IsUrl()
  imageUrl: string;
}
