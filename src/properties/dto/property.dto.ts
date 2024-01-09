import { Prisma } from '@prisma/client';

export class CreatePropertyDto implements Prisma.PropertyCreateInput {
  address: string;
  number: number;
  avaliable: boolean;
  zipcode: string;
  city: string;
  district: string;
  complement: string;
  uf: string;
  ownership?: Prisma.OwnershipCreateNestedManyWithoutPropertyInput;
  user: Prisma.UserCreateNestedOneWithoutPropertyInput;
  Contract?: Prisma.ContractCreateNestedManyWithoutPropertyInput;
}

export class UpdatePropertyDto implements Prisma.PropertyUpdateInput {}
