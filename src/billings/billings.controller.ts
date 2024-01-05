import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BillingsService } from './billings.service';
import { CreateBillingDto, UpdateBillingDto } from './dto/billing.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@Controller('billings')
@UseGuards(JwtAuthGuard)
export class BillingsController {
  constructor(private readonly billingsService: BillingsService) {}

  @Post()
  create(@Body() createBillingDto: CreateBillingDto) {
    return this.billingsService.create(createBillingDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    const id = parseInt(userId);
    return this.billingsService.findAll(id);
  }

  @Get(':userId/:id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.billingsService.findOne(parseInt(id), parseInt(userId));
  }

  @Patch(':userId/:id')
  update(
    @Param('userId') userId: number,
    @Param('id') id: number,
    @Body() updateRenterDto: UpdateBillingDto,
  ) {
    return this.billingsService.update(id, userId, updateRenterDto);
  }

  @Delete(':userId/:id')
  remove(@Param('userId') userId: number, @Param('id') id: number) {
    return this.billingsService.remove(id, userId);
  }
}
