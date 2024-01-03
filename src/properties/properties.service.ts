import { Injectable } from '@nestjs/common';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}
  create(data: CreatePropertyDto) {
    return this.prisma.property.create({ data });
  }

  findAll(userId: number) {
    return this.prisma.property.findMany({ where: { userId } });
  }

  findOne(id: number, userId: number) {
    return this.prisma.property.findUnique({ where: { id, userId } });
  }

  update(id: number, userId: number, data: UpdatePropertyDto) {
    return this.prisma.property.update({ data, where: { id, userId } });
  }

  remove(id: number, userId: number) {
    return this.prisma.property.delete({ where: { id, userId } });
  }
}
