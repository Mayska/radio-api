import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
    Radios,
    Prisma,
} from '@prisma/client';

@Injectable()
export class RadiosService {

    constructor(private prisma: PrismaService) { }

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
