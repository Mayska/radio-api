import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { RadiosService } from './radios.service';
import { Radios as RadiosModel } from '@prisma/client';


@Controller('radios')
export class RadiosController {
    constructor(
        private readonly radiosService: RadiosService
    ) { }

    @Post()
    async createRadio(@Body() postData: { name: string, url_flux: string, url_img: string }): Promise<RadiosModel> {
        return this.radiosService.createRadio(postData);
    }

    @Get()
    async findAllRadios(): Promise<RadiosModel[]> {
        return this.radiosService.findAll();
    }

    @Get('/order/:by')
    async findAllOrderBy(@Param('by') by: string): Promise<RadiosModel[] | string> {
        console.log(by);
        if (by === 'desc' || by === 'asc') {
            return this.radiosService.findAllOrderBy(by);
        }
        else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

}
