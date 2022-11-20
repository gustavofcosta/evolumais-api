import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prismaClient';
import { CreateContacDto } from './dto/create-contac.dto';
import { UpdateContacDto } from './dto/update-contac.dto';

@Injectable()
export class ContacService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContacDto: CreateContacDto) {
    const createContact = await this.prisma.contact.create({
      data: createContacDto,
    });

    return {
      createContact,
    };
  }

  async findAll() {
    return await this.prisma.contact.findMany();
  }

  async findOne(id: string) {
    const contact = await this.prisma.contact.findUnique({ where: { id } });

    return contact;
  }

  update(id: number, updateContacDto: UpdateContacDto) {
    return `This action updates a #${id} contac`;
  }

  remove(id: number) {
    return `This action removes a #${id} contac`;
  }
}
