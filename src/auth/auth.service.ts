import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { createUserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
        phoneNumber: username,
        email: username,
      },
    });

    const comparedPassword = await bcrypt.compare(password, user?.password);

    if (!comparedPassword) {
      return;
    }

    return { success: true, user };
  }

  async signUp(data: createUserDto) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);

    const newData: createUserDto = {
      ...data,
      password: hashPassword,
    };
  }
}
