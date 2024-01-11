import { Injectable } from '@nestjs/common';
import { CreateContractDto, UpdateContractDto } from './dto/contract.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateContractDto) {
    return this.prisma.contract.create({ data });
  }

  findAll(userId: number) {
    return this.prisma.contract.findMany({
      select: {
        id: true,
        property: {
          select: { address: true, number: true },
        },
        renter: {
          select: { name: true },
        },
        status: true,
        startDate: true,
        endDate: true,
      },
      where: { userId },
    });
  }

  findOne(id: number, userId: number) {
    return this.prisma.contract.findUnique({ where: { id, userId } });
  }

  update(id: number, userId: number, data: UpdateContractDto) {
    return this.prisma.contract.update({ data, where: { id, userId } });
  }

  remove(id: number, userId: number) {
    return this.prisma.contract.delete({ where: { id, userId } });
  }
}
