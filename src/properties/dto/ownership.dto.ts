import { Prisma } from '@prisma/client';

export class CreateOwnershipDto implements Prisma.OwnershipCreateInput {
  cut: number;
  isMainOwner: boolean;
  property: Prisma.PropertyCreateNestedOneWithoutOwnershipInput;
  owner: Prisma.OwnerCreateNestedOneWithoutOwnershipInput;
  user: Prisma.UserCreateNestedOneWithoutOwnershipInput;
}
