//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';

//Guards
import { Roles } from 'src/guards/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guards';

//Services
import { TagsService } from './tags.service';

//Dto
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@ApiTags('Tags')
@ApiBearerAuth('Bearer')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles('admin')
  @ApiOperation({
    summary: 'Create Tag or Status',
    description: 'Create new tag or Status',
  })
  @ApiBody({ type: CreateTagDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createTagDto: [CreateTagDto]) {
    return this.tagsService.create(createTagDto);
  }

  // @Get()
  // findAll() {
  //   return this.tagsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tagsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
  //   return this.tagsService.update(+id, updateTagDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tagsService.remove(+id);
  // }
}
