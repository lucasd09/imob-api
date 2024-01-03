import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RentersModule } from './renters/renters.module';
import { OwnersModule } from './owners/owners.module';
import { PropertiesModule } from './properties/properties.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [UsersModule, AuthModule, RentersModule, OwnersModule, PropertiesModule, ContractsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
