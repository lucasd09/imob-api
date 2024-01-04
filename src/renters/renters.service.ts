import { Injectable } from '@nestjs/common';
import { CreateRenterDto, UpdateRenterDto } from './dto/renter.dto';
import { PrismaService } from 'src/prisma.service';
import { parse } from 'date-fns';

@Injectable()
export class RentersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateRenterDto) {
    data.birthdate = parse(
      data.birthdate,
      'yyyy-MM-dd',
      new Date(),
    ).toISOString();
    return this.prisma.renter.create({ data });
  }

  findAll(userId: number) {
    return this.prisma.renter.findMany({ where: { userId } });
  }

  findOne(id: number, userId: number) {
    return this.prisma.renter.findUnique({ where: { id, userId } });
  }

  update(id: number, userId: number, data: UpdateRenterDto) {
    return this.prisma.renter.update({ data, where: { id, userId } });
  }

  remove(id: number, userId: number) {
    return this.prisma.renter.delete({ where: { id, userId } });
  }
}
