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
import { RentersService } from './renters.service';
import { CreateRenterDto, UpdateRenterDto } from './dto/renter.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@Controller('renters')
@UseGuards(JwtAuthGuard)
export class RentersController {
  constructor(private readonly rentersService: RentersService) {}

  @Post()
  create(@Body() createRenterDto: CreateRenterDto) {
    return this.rentersService.create(createRenterDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    const id = parseInt(userId);
    return this.rentersService.findAll(id);
  }

  @Get(':userId/:id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.rentersService.findOne(parseInt(id), parseInt(userId));
  }

  @Patch(':userId/:id')
  update(
    @Param('userId') userId: number,
    @Param('id') id: string,
    @Body() updateRenterDto: UpdateRenterDto,
  ) {
    return this.rentersService.update(id, userId, updateRenterDto);
  }

  @Delete(':userId/:id')
  remove(@Param('userId') userId: number, @Param('id') id: string) {
    return this.rentersService.remove(id, userId);
  }
}
