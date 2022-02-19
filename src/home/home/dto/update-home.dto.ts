import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeDto } from './create-home.dto';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateHomeDto extends PartialType(CreateHomeDto) {
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    category: string
    @IsNotEmpty()
    url: string
    @IsNotEmpty()
    url_img: string
    @IsBoolean()
    actif: boolean
}
