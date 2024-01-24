import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MetricsService {
  constructor(private prisma: PrismaService) {}

  async activeContracts() {
    const contracts = await this.prisma.contract.count({
      where: { status: 'ACTIVE' },
    });

    return contracts;
  }
}
