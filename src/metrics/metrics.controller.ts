import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@Controller('metrics')
@UseGuards(JwtAuthGuard)
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get('/contracts/:userId')
  activeContracts(@Param('userId') userId: string) {
    return this.metricsService.Contracts(parseInt(userId));
  }
}
