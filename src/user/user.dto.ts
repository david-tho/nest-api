import { $Enums, User } from '@prisma/client';
import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsEmail,
  IsBoolean,
  IsPhoneNumber,
} from 'class-validator';

type UserDto = Pick<
  User,
  | 'name'
  | 'password'
  | 'phoneNumber'
  | 'isAdmin'
  | 'email'
  | 'gender'
  | 'branchId'
  | 'age'
  | 'imageUrl'
>;

export class createUserDto implements UserDto {
  @IsNotEmpty({ message: 'Please enter a name' })
  @IsString({ message: 'Name must be a string.' })
  name: string;

  @IsString()
  password: string;

  @IsPhoneNumber('KH', { message: 'Invalid phone number format' })
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsBoolean({ message: 'isAdmin must be a boolean' })
  isAdmin: boolean;

  @IsNotEmpty({ message: 'Please enter an email' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Please set a gender' })
  @IsString({ message: 'Invalid gender' })
  gender: $Enums.Gender;

  @IsOptional()
  @IsNumber({}, { message: 'branchId must be a number' })
  branchId: number;

  @IsNotEmpty({ message: 'Please enter an age' })
  @IsNumber()
  age: number;

  @IsOptional()
  @IsUrl()
  imageUrl: string;
}
