import { IsBoolean, IsNotEmpty } from 'class-validator';
export class CreateHomeDto {
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    category: string
    @IsNotEmpty()
    url: string
    url_img?: string
    @IsBoolean()
    actif?: boolean
}
