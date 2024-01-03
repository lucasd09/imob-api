import { PartialType } from '@nestjs/mapped-types';
import { $Enums, Prisma } from '@prisma/client';

export class CreateContractDto implements Prisma.ContractCreateInput {
  value: number;
  status: $Enums.ContractStatus;
  startDate: string | Date;
  endDate: string | Date;
  user: Prisma.UserCreateNestedOneWithoutContractInput;
  property: Prisma.PropertyCreateNestedOneWithoutContractInput;
  renter: Prisma.RenterCreateNestedOneWithoutContractInput;
}

export class UpdateContractDto extends PartialType(CreateContractDto) {}
