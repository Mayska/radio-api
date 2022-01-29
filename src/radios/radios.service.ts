import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
    Radios, Prisma, PrismaClient
} from '@prisma/client';
import { env } from 'process';

const URL_ICON_RADIO = env.URL_ICON_RADIO;

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

const prisma = new PrismaClient({
    rejectOnNotFound: true,
})

@Injectable()
export class RadiosService {

    constructor(private prisma: PrismaService) { }


    async createRadio(data: Prisma.RadiosCreateInput): Promise<Radios> {
        data.url_img === '' ? data.url_img = URL_ICON_RADIO : ''
        return this.prisma.radios.create({
            data: createRadioAndPost(data.name, data.url_flux, data.url_img === '' ? URL_ICON_RADIO : data.url_img)
        });
    }

    async findAll(): Promise<Radios[] | null> {
        return this.prisma.radios.findMany();
    };

    async findOne(id: number): Promise<Radios | null> {
        const newLocal = this.prisma.radios.findFirst({
            where: {
                id: id
            }
        })
        return newLocal;

    };

    async findAllOrderBy(by: string): Promise<Radios[] | null> {
        return this.prisma.radios.findMany({
            orderBy: [
                {
                    name: by === 'desc' ? 'desc' : 'asc',
                },
            ],
        })
    };

    async updateRadio(id: number, patchData: Prisma.RadiosCreateInput): Promise<Radios | null> {
        return this.prisma.radios.update({
            where: {
                id: id,
            },
            data: {
                name: patchData.name,
                url_flux: patchData.url_flux,
                url_img: patchData.url_img === '' ? patchData.url_img = URL_ICON_RADIO : patchData.url_img
            }
        })
    };

    async deleteRadio(id: number): Promise<Radios | null> {
        return this.prisma.radios.delete({
            where: {
                id: id
            }
        })
    };
}
