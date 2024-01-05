import { Prisma } from '@prisma/client';

export class CreatePropertyDto implements Prisma.PropertyCreateInput {
  address: string;
  number: number;
  avaliable: boolean;
  ownership?: Prisma.OwnershipCreateNestedManyWithoutPropertyInput;
  user: Prisma.UserCreateNestedOneWithoutPropertyInput;
  Contract?: Prisma.ContractCreateNestedManyWithoutPropertyInput;
}

export class UpdatePropertyDto implements Prisma.PropertyUpdateInput {}
