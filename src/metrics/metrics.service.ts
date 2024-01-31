import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MetricsService {
  constructor(private prisma: PrismaService) {}

  async Contracts(userId: number) {
    const editing = await this.prisma.contract.count({
      where: { status: 'EDITING', userId },
    });

    const active = await this.prisma.contract.count({
      where: { status: 'ACTIVE', userId },
    });

    const closed = await this.prisma.contract.count({
      where: { status: 'CLOSED', userId },
    });

    return { editing, active, closed };
  }
}
