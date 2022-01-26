import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { RadiosService } from './radios.service';
import { Radios as RadiosModel } from '@prisma/client';

@Controller('radios')
export class RadiosController {
    constructor(
        private readonly radiosService: RadiosService
    ) { }

    @Post()
    async createRadio(@Body() postData: { name: string, url_flux: string, url_img: string }): Promise<RadiosModel> {
        if (postData.name === '' || postData.url_flux === '') {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        return this.radiosService.createRadio(postData);
    }

    @Get()
    async findAllRadios(): Promise<RadiosModel[]> {
        return this.radiosService.findAll();
    }

    @Get(':id')
    async findOneRadios(@Param('id') id: string): Promise<RadiosModel | string> {
        return this.radiosService.findOne(+id);
    }

    @Get('/order/:by')
    async findAllOrderBy(@Param('by') by: string): Promise<RadiosModel[] | string> {
        if (by === 'asc' || by === 'desc') {
            return this.radiosService.findAllOrderBy(by);
        }
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    @Patch(':id')
    async updateRadio(@Param('id') id: string, @Body() patchData: { name: string, url_flux: string, url_img: string }): Promise<RadiosModel> {
        if (patchData.name === '' || patchData.url_flux === '') {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        return this.radiosService.updateRadio(+id, patchData);
    }

    @Delete(':id')
    async removeRadio(@Param('id') id: string) {
        console.log('Delete' + id);
        return this.radiosService.deleteRadio(+id);
    }

}
