import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import { PrismaService } from 'src/prisma.service';
import { ContractMiddleware } from 'src/middleware/contract.middleware';

@Module({
  controllers: [ContractsController],
  providers: [ContractsService, PrismaService],
})
export class ContractsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ContractMiddleware)
      .forRoutes(
        { method: RequestMethod.POST, path: '/contracts' },
        { method: RequestMethod.PATCH, path: '/contracts/:userId/:id' },
      );
  }
}
