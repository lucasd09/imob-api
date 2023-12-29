import { PartialType } from '@nestjs/mapped-types';
import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  name: string;
  email: string;
  password: string;
  Owner?: Prisma.OwnerCreateNestedManyWithoutUserInput;
  Renter?: Prisma.RenterCreateNestedManyWithoutUserInput;
  Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
  Ownership?: Prisma.OwnershipCreateNestedManyWithoutUserInput;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
