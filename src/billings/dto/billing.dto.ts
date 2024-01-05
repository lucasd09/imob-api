import { $Enums, Prisma } from '@prisma/client';

export class CreateBillingDto implements Prisma.BillingCreateInput {
  type: $Enums.BillingType;
  contract: Prisma.ContractCreateNestedOneWithoutBillingInput;
  user: Prisma.UserCreateNestedOneWithoutBillingInput;
  installments?: Prisma.InstallmentCreateNestedManyWithoutBillingInput;
}

export class UpdateBillingDto implements Prisma.BillingUpdateInput {}
