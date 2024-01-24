import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RentersModule } from './renters/renters.module';
import { OwnersModule } from './owners/owners.module';
import { PropertiesModule } from './properties/properties.module';
import { ContractsModule } from './contracts/contracts.module';
import { BillingsModule } from './billings/billings.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    RentersModule,
    OwnersModule,
    PropertiesModule,
    ContractsModule,
    BillingsModule,
    MetricsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
