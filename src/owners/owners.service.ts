import { Injectable } from '@nestjs/common';
import { CreateOwnerDto, UpdateOwnerDto } from './dto/owner.dto';
import { PrismaService } from 'src/prisma.service';
import { parse } from 'date-fns';

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateOwnerDto) {
    data.birthdate = parse(
      data.birthdate,
      'yyyy-MM-dd',
      new Date(),
    ).toISOString();
    return this.prisma.owner.create({ data });
  }

  findAll(userId: number) {
    return this.prisma.owner.findMany({ where: { userId } });
  }

  findOne(id: number, userId: number) {
    return this.prisma.owner.findUnique({ where: { id, userId } });
  }

  update(id: number, userId: number, data: UpdateOwnerDto) {
    return this.prisma.owner.update({ data, where: { id, userId } });
  }

  remove(id: number, userId: number) {
    return this.prisma.owner.delete({ where: { id, userId } });
  }
}
