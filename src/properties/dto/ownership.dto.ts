import { Prisma } from '@prisma/client';

export class CreateOwnershipDto implements Prisma.OwnershipCreateManyInput {
  id?: number;
  userId: number;
  propertyId: number;
  ownerId: number;
  cut: number;
  isMainOwner: boolean;
}
