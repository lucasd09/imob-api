import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import { PrismaService } from 'src/prisma.service';
import { ContractMiddleware } from 'src/middleware/contract.middleware';
import { UpdateContractMiddleware } from 'src/middleware/update-contract.middleware';

@Module({
  controllers: [ContractsController],
  providers: [ContractsService, PrismaService],
})
export class ContractsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ContractMiddleware)
      .forRoutes({ path: 'contracts', method: RequestMethod.POST })
      .apply(UpdateContractMiddleware)
      .forRoutes({
        path: 'contracts/:userId/:id',
        method: RequestMethod.PATCH,
      });
  }
}
