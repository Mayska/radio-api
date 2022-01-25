import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RadiosController } from './radios.controller';
import { RadiosService } from './radios.service';

@Module({
  controllers: [RadiosController],
  providers: [RadiosService, PrismaService]
})
export class RadiosModule { }