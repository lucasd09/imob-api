import { PartialType } from '@nestjs/mapped-types';
import { $Enums, Prisma } from '@prisma/client';

export class CreatePropertyDto implements Prisma.PropertyCreateInput {
  address: string;
  status: $Enums.PropertyStatus;
  owners?: Prisma.OwnerCreateNestedManyWithoutPropertiesInput;
  ownership?: Prisma.OwnershipCreateNestedManyWithoutPropertyInput;
  user: Prisma.UserCreateNestedOneWithoutPropertyInput;
  Contract?: Prisma.ContractCreateNestedManyWithoutPropertyInput;
}

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
