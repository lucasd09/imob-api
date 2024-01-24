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
import { PropertiesService } from './properties.service';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { CreateOwnershipDto } from './dto/ownership.dto';

@Controller('properties')
@UseGuards(JwtAuthGuard)
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Post('ownerships')
  addOwnership(@Body() createOwnershipDto: CreateOwnershipDto) {
    return this.propertiesService.addOwnership(createOwnershipDto);
  }

  @Get('ownerships/:userId/:propertyId')
  getOwnerships(
    @Param('userId') userId: string,
    @Param('propertyId') propertyId: string,
  ) {
    return this.propertiesService.getOwnerships(
      parseInt(userId),
      parseInt(propertyId),
    );
  }

  @Delete('ownerships/:id')
  @HttpCode(204)
  deleteOwnership(@Param('id') id: string) {
    return this.propertiesService.deleteOwnership(parseInt(id));
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    const id = parseInt(userId);
    return this.propertiesService.findAll(id);
  }

  @Get(':userId/:id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.propertiesService.findOne(parseInt(id), parseInt(userId));
  }

  @Patch(':userId/:id')
  update(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertiesService.update(
      parseInt(id),
      parseInt(userId),
      updatePropertyDto,
    );
  }

  @Delete(':userId/:id')
  remove(@Param('userId') userId: number, @Param('id') id: number) {
    return this.propertiesService.remove(id, userId);
  }
}
