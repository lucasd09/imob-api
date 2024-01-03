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
import { OwnersService } from './owners.service';
import { CreateOwnerDto, UpdateOwnerDto } from './dto/owner.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@Controller('owners')
@UseGuards(JwtAuthGuard)
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  @Post()
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownersService.create(createOwnerDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    const id = parseInt(userId);
    return this.ownersService.findAll(id);
  }

  @Get(':userId/:id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.ownersService.findOne(parseInt(id), parseInt(userId));
  }

  @Patch(':userId/:id')
  update(
    @Param('userId') userId: number,
    @Param('id') id: number,
    @Body() updateOwnerDto: UpdateOwnerDto,
  ) {
    return this.ownersService.update(id, userId, updateOwnerDto);
  }

  @Delete(':userId/:id')
  remove(@Param('userId') userId: number, @Param('id') id: number) {
    return this.ownersService.remove(id, userId);
  }
}
