import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeDto } from './create-home.dto';

export class UpdateHomeDto extends PartialType(CreateHomeDto) {
    name: string
    category: string
    url: string
    url_img: string
    actif: boolean
}
