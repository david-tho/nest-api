import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getById(id: string): Promise<User> {
    return await this.prisma.user.findFirst({ where: { id } });
  }

  async delete(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
