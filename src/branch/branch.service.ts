import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Branch } from '@prisma/client';
import { newBranchDto } from './branch.dto';

@Injectable()
export class BranchService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Branch[]> {
    return await this.prisma.branch.findMany();
  }

  async getById(id: number): Promise<Branch> {
    return await this.prisma.branch.findFirst({ where: { id } });
  }

  async create(branch: newBranchDto): Promise<Branch> {
    return await this.prisma.branch.create({ data: branch });
  }
}
