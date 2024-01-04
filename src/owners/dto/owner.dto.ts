import { $Enums, Prisma } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOwnerDto implements Prisma.OwnerCreateInput {
  name: string;
  email: string;
  cnpjcpf: string;
  ierg: string;
  phone: string;
  pessoa: $Enums.TipoPessoa;
  birthdate: string;
  properties?: Prisma.PropertyCreateNestedManyWithoutOwnersInput;
  ownership?: Prisma.OwnershipCreateNestedManyWithoutOwnerInput;
  user: Prisma.UserCreateNestedOneWithoutOwnerInput;
}

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {}
