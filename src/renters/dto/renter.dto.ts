import { PartialType } from '@nestjs/mapped-types';
import { Prisma } from '@prisma/client';

export class CreateRenterDto implements Prisma.RenterCreateInput {
  user: Prisma.UserCreateNestedOneWithoutRenterInput;
  name: string;
  email: string;
  Contract?: Prisma.ContractCreateNestedManyWithoutRenterInput;
}

export class UpdateRenterDto extends PartialType(CreateRenterDto) {}
