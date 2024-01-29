import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PrismaService } from 'src/prisma.service';
import { OwnershipMiddleware } from 'src/middleware/ownership.middleware';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, PrismaService],
})
export class PropertiesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(OwnershipMiddleware).forRoutes({
      method: RequestMethod.POST,
      path: '/properties/ownerships',
    });
  }
}
