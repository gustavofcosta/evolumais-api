import { Module } from '@nestjs/common';
import { ContacService } from './contac.service';
import { ContacController } from './contac.controller';
import { PrismaService } from 'src/db/prismaClient';

@Module({
  controllers: [ContacController],
  providers: [ContacService, PrismaService],
})
export class ContacModule {}
