import { PartialType } from '@nestjs/mapped-types';
import { $Enums, Prisma } from '@prisma/client';

export class CreateRenterDto implements Prisma.RenterCreateInput {
  user: Prisma.UserCreateNestedOneWithoutRenterInput;
  name: string;
  email: string;
  cnpjcpf: string;
  ierg: string;
  phone: string;
  pessoa: $Enums.TipoPessoa;
  birthdate: string;
  Contract?: Prisma.ContractCreateNestedManyWithoutRenterInput;
}

export class UpdateRenterDto extends PartialType(CreateRenterDto) {}
