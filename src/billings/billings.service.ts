import { Injectable } from '@nestjs/common';
import { CreateBillingDto, UpdateBillingDto } from './dto/billing.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BillingsService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateBillingDto) {
    return this.prisma.billing.create({ data });
  }

  findAll(userId: number) {
    return this.prisma.billing.findMany({ where: { userId } });
  }

  findOne(id: number, userId: number) {
    return this.prisma.billing.findUnique({ where: { id, userId } });
  }

  update(id: number, userId: number, data: UpdateBillingDto) {
    return this.prisma.billing.update({ data, where: { id, userId } });
  }

  remove(id: number, userId: number) {
    return this.prisma.billing.delete({ where: { id, userId } });
  }

  findInstallments(billingId: number) {
    return this.prisma.installment.findMany({ where: { billingId } });
  }

  findByContract(contractId: number, userId: number) {
    return this.prisma.billing.findMany({
      include: { installments: true },
      where: { contractId, userId },
    });
  }
}
