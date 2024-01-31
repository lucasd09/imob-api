import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/prisma.service';
import { CreateOwnershipDto } from 'src/properties/dto/ownership.dto';

@Injectable()
export class OwnershipMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const ownership = req.body as CreateOwnershipDto;

    try {
      const owner = await this.prisma.owner.findUnique({
        where: { id: ownership.owner.connect.id },
      });

      if (owner.userId !== ownership.user.connect.id) {
        return res
          .status(404)
          .json({ message: 'Owner not Found in this tenant' });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
