import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CreateContractDto } from 'src/contracts/dto/contract.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContractMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const {
      user,
      renter: _renter,
      property: _property,
    } = req.body as CreateContractDto;

    try {
      const renter = await this.prisma.renter.findUnique({
        where: { id: _renter.connect.id },
      });
      const property = await this.prisma.owner.findUnique({
        where: { id: _property.connect.id },
      });

      if (
        renter.userId !== user.connect.id ||
        property.userId !== user.connect.id
      ) {
        return res.status(404).json({
          message: 'Renter/Property not found in this tenant',
        });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
