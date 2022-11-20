import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContacService } from './contac.service';
import { CreateContacDto } from './dto/create-contac.dto';
import { UpdateContacDto } from './dto/update-contac.dto';

@Controller('contact')
export class ContacController {
  constructor(private readonly contacService: ContacService) {}

  @Post()
  create(@Body() createContacDto: CreateContacDto) {
    return this.contacService.create(createContacDto);
  }

  @Get()
  findAll() {
    return this.contacService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contacService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContacDto: UpdateContacDto) {
    return this.contacService.update(+id, updateContacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contacService.remove(+id);
  }
}
