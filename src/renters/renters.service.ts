import { Injectable } from '@nestjs/common';
import { CreateRenterDto, UpdateRenterDto } from './dto/renter.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RentersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateRenterDto) {
    return this.prisma.renter.create({ data });
  }

  findAll(userId: number) {
    return this.prisma.renter.findMany({ where: { userId } });
  }

  findOne(id, userId: number) {
    return this.prisma.renter.findUnique({ where: { id, userId } });
  }

  update(id, userId: number, data: UpdateRenterDto) {
    return this.prisma.renter.update({ data, where: { id, userId } });
  }

  remove(id, userId: number) {
    return this.prisma.renter.delete({ where: { id, userId } });
  }
}
