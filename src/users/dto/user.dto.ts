import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  name: string;
  email: string;
  password: string;
  access: boolean;
  Contract?: Prisma.ContractCreateNestedManyWithoutUserInput;
  Billing?: Prisma.BillingCreateNestedManyWithoutUserInput;
  Owner?: Prisma.OwnerCreateNestedManyWithoutUserInput;
  Renter?: Prisma.RenterCreateNestedManyWithoutUserInput;
  Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
  Ownership?: Prisma.OwnershipCreateNestedManyWithoutUserInput;
}

export class UpdateUserDto implements Prisma.UserUpdateInput {}
