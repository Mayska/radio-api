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

  //? Création d'un item 
  create(createHomeDto: Prisma.HomeCreateInput): Promise<Home | null> {
    return this.prisma.home.create({
      data: createHomeAndPost(createHomeDto.name,
        this.convertToLowerCase(createHomeDto.category),
        createHomeDto.url,
        createHomeDto.url_img,
        true
      )
    });
  }

  //? Récupére tous les items
  findAll(): Promise<Home[] | null> {
    return this.prisma.home.findMany();
  }

  //? Récupére une liste de category de chaque item
  findAllCategory(): Promise<any[] | null> {
    return this.prisma.home.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
    });
  }

  //? Récupére un item par avec un id
  findOne(id: number): Promise<Home | null> {
    return this.prisma.home.findFirst({
      where: {
        id: id
      }
    });
  }

  //? MAJ d'un item par l'id
  update(id: number, updateHomeDto: UpdateHomeDto): Promise<Home | null> {
    return this.prisma.home.update({
      where: {
        id: id,
      },
      data: {
        name: this.convertFirstUppercase(updateHomeDto.name),
        category: this.convertToLowerCase(updateHomeDto.category),
        url: updateHomeDto.url,
        url_img: updateHomeDto.url_img,
        actif: {
          set: updateHomeDto.actif
        }
      }
    });
  }

  //? supprime un item par l'id
  remove(id: number): Promise<Home | null> {
    return this.prisma.home.delete({
      where: {
        id: id
      }
    })
  }

  //? Récupére une list d'item par sa category
  findByCategory(category: string): Promise<Home[] | null> {
    return this.prisma.home.findMany({
      where: {
        category: category,
        actif: true
      }
    })
  }

  private convertToLowerCase(text: string): string {
    return text.toLowerCase()
  }

  private convertFirstUppercase(text: string): string {
    return text[0].toUpperCase() + text.slice(1)
  }

}

