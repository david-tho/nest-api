import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BranchModule } from './branch/branch.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [PrismaModule, UserModule, BranchModule, AuthModule, BookModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
