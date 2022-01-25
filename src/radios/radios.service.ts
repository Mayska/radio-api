import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
    Radios, Prisma
} from '@prisma/client';


const createRadioAndPost = (
    name: string,
    url_flux: string,
    url_img?: string
) => {
    return Prisma.validator<Prisma.RadiosCreateInput>()({
        name,
        url_flux,
        url_img,
    })
}

@Injectable()
export class RadiosService {

    constructor(private prisma: PrismaService) { }


    async createRadio(data: Prisma.RadiosCreateInput): Promise<Radios> {
        return this.prisma.radios.create({
            data: createRadioAndPost(data.name, data.url_flux, data.url_img)
        });
    }

    async findAll(): Promise<Radios[] | null> {
        return this.prisma.radios.findMany();
    };

    async findAllOrderBy(by: string): Promise<Radios[] | null> {
        let orderBy: Promise<Radios[] | null>
        if (by == 'desc') {
            orderBy = this.prisma.radios.findMany({
                orderBy: [
                    {
                        name: 'desc',
                    },
                ],
            });

        } else {
            orderBy = this.prisma.radios.findMany({
                orderBy: [
                    {
                        name: 'asc',
                    },
                ],

            })
        }
        return orderBy
    };

}
