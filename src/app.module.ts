import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './db/prismaClient';
import { ContacModule } from './contac/contac.module';

@Module({
  imports: [ContacModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
