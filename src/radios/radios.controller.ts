import { Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { RadiosService } from './radios.service';
import { Radios as RadiosModel } from '@prisma/client';


@Controller('radios')
export class RadiosController {
    constructor(
        private readonly radiosService: RadiosService
    ) { }

    @Get()
    async getAllRadios(): Promise<RadiosModel[]> {
        return this.radiosService.findAll();
    }

    @Get('/order/:by')
    async getAllRadiosOrderBy(@Param('by') by: string): Promise<RadiosModel[] | string> {
        console.log(by);
        if (by === 'desc' || by === 'asc') {
            return this.radiosService.findAllOrderBy(by);
        }
        else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

}
