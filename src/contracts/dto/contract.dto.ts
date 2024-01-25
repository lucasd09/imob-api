import { $Enums, Prisma } from '@prisma/client';

export class CreateContractDto implements Prisma.ContractCreateInput {
  Billing?: Prisma.BillingCreateNestedManyWithoutContractInput;
  value: number;
  status: $Enums.ContractStatus;
  startDate: string;
  endDate: string;
  dueDate: string;
  user: Prisma.UserCreateNestedOneWithoutContractInput;
  property: Prisma.PropertyCreateNestedOneWithoutContractInput;
  renter: Prisma.RenterCreateNestedOneWithoutContractInput;
}

export class UpdateContractDto implements Prisma.ContractUpdateInput {}
