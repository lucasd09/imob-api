import { Injectable } from '@nestjs/common';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateOwnershipDto } from './dto/ownership.dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}
  create(data: CreatePropertyDto) {
    return this.prisma.property.create({ data });
  }

  addOwnership(data: CreateOwnershipDto) {
    return this.prisma.ownership.create({ data });
  }

  getOwnerships(userId: number, propertyId: number) {
    return this.prisma.ownership.findMany({
      select: {
        id: true,
        owner: {
          select: { id: true, name: true },
        },
        cut: true,
        isMainOwner: true,
      },
      where: { userId, propertyId },
    });
  }

  deleteOwnership(id: number) {
    return this.prisma.ownership.delete({ where: { id } });
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
