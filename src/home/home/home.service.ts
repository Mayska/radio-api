import { Injectable, Query } from '@nestjs/common';
import { UpdateHomeDto } from './dto/update-home.dto';
import {
  Home, Prisma,
} from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

const createHomeAndPost = (
  name: string,
  category: string,
  url: string,
  url_img: string,
  actif: boolean,
) => {
  return Prisma.validator<Prisma.HomeCreateInput>()({
    name,
    category,
    url,
    url_img,
    actif,
  })
}

@Injectable()
export class HomeService {

  constructor(private prisma: PrismaService) { }

  create(createHomeDto: Prisma.HomeCreateInput): Promise<Home | null> {
    return this.prisma.home.create({
      data: createHomeAndPost(createHomeDto.name,
        createHomeDto.category,
        createHomeDto.url,
        createHomeDto.url_img,
        true
      )
    });
  }

  findAll(): Promise<Home[] | null> {
    return this.prisma.home.findMany();
  }

  findAllCategory(): Promise<any[] | null> {
    return this.prisma.home.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
    });
  }

  findOne(id: number): Promise<Home | null> {
    return this.prisma.home.findFirst({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateHomeDto: UpdateHomeDto): Promise<Home | null> {
    return this.prisma.home.update({
      where: {
        id: id,
      },
      data: {
        name: updateHomeDto.name,
        category: updateHomeDto.category,
        url: updateHomeDto.url,
        url_img: updateHomeDto.url_img,
        actif: {
          set: updateHomeDto.actif
        }
      }
    });
  }

  remove(id: number): Promise<Home | null> {
    return this.prisma.home.delete({
      where: {
        id: id
      }
    })
  }

  findByCategory(category: string): Promise<Home[] | null> {
    return this.prisma.home.findMany({
      where: {
        category: category
      }
    })
  }
}

