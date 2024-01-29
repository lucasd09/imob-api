import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto, UpdateContractDto } from './dto/contract.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { ContractMiddleware } from 'src/middleware/contract.middleware';

@Controller('contracts')
@UseGuards(JwtAuthGuard)
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  @UseGuards(ContractMiddleware)
  create(@Body() createContractDto: CreateContractDto) {
    return this.contractsService.create(createContractDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    const id = parseInt(userId);
    return this.contractsService.findAll(id);
  }

  @Get(':userId/:id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.contractsService.findOne(parseInt(id), parseInt(userId));
  }

  @Patch(':userId/:id')
  @UseGuards(ContractMiddleware)
  update(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateContractDto: UpdateContractDto,
  ) {
    return this.contractsService.update(
      parseInt(id),
      parseInt(userId),
      updateContractDto,
    );
  }

  @Delete(':userId/:id')
  @HttpCode(204)
  remove(@Param('userId') userId: string, @Param('id') id: string) {
    return this.contractsService.remove(parseInt(id), parseInt(userId));
  }
}
