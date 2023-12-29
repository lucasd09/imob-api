import { Module } from '@nestjs/common';
import { RentersService } from './renters.service';
import { RentersController } from './renters.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RentersController],
  providers: [RentersService, PrismaService],
})
export class RentersModule {}
