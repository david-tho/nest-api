import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BranchService } from './branch.service';
import { newBranchDto } from './branch.dto';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get()
  async getAll() {
    return await this.branchService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.branchService.getById(+id);
  }

  @Post()
  async create(@Body() branch: newBranchDto) {
    return await this.branchService.create(branch);
  }
}
