import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UpdateContractMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { renterId, propertyId } = req.body;
    const { userId } = req.params;

    try {
      if (renterId) {
        const renter = await this.prisma.renter.findUnique({
          where: { id: renterId },
        });

        if (renter.userId !== parseInt(userId)) {
          return res.status(404).json({
            message: 'Renter not found in this tenant',
          });
        }
      }

      if (propertyId) {
        const property = await this.prisma.property.findUnique({
          where: { id: propertyId },
        });

        if (property.userId !== parseInt(userId)) {
          return res.status(404).json({
            message: 'Property not found in this tenant',
          });
        }
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
