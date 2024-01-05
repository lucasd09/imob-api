import { Prisma } from '@prisma/client';

export class CreateInstallmentDto implements Prisma.InstallmentCreateInput {
  number: number;
  value: number;
  dueDate: string;
  paid: boolean;
  billing: Prisma.BillingCreateNestedOneWithoutInstallmentsInput;
}

export class UpdateInstallmentDto implements Prisma.InstallmentUpdateInput {}
