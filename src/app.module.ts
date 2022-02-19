import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home/home.module';
import { PrismaService } from './prisma.service';
import { RadiosModule } from './radios/radios.module';

@Module({
  imports: [RadiosModule, HomeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
