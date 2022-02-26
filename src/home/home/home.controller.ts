import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) { }

  //? création d'un nouvel item
  @Post()
  create(@Body() createHomeDto: CreateHomeDto) {
    return this.homeService.create(createHomeDto);
  }

  //? affiche tous les items
  @Get()
  findAll() {
    return this.homeService.findAll();
  }

  //? affiche la liste des category disponible de chaques items
  @Get('/category')
  findAllCategory() {
    return this.homeService.findAllCategory();
  }

  //? affiche la liste des items par category
  //? @param : category
  @Get('/category/:category')
  findByCategory(@Param('category') category: string) {
    category = category.toLowerCase();
    if (category === 'home' || category === 'tv' || category === 'utilitaire' || category === 'favori') {
      return this.homeService.findByCategory(category);
    }
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  //? affiche un item suivant l'id
  //? @param : id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeService.findOne(+id);
  }

  //? MAJ d'un item suivant l'id
  //? @param : id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeDto: UpdateHomeDto) {
    return this.homeService.update(+id, updateHomeDto);
  }

  //? Supprime l'item suivant l'id
  //? @param : id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeService.remove(+id);
  }
}
