//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';

//Services
import { UsersTagsService } from './users-tags.service';

//Dto
import { IntegrationUsersStatusDto } from './dto/integration-users-tags.dto';

@ApiTags('Users Tags and Status')
@ApiBearerAuth('Bearer')
@Controller('users-status')
export class UsersTagsController {
  constructor(private readonly UsersTagsService: UsersTagsService) {}

  @Post()
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles('admin')
  @ApiOperation({
    summary: 'Integration Status user to Umbler',
    description: 'Integration Status user to Umbler',
  })
  @ApiBody({ type: IntegrationUsersStatusDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  eventIntegration(@Body() integrationUsersStatus: IntegrationUsersStatusDto) {
    return this.UsersTagsService.eventIntegration(integrationUsersStatus);
  }

  // @Get()
  // findAll() {
  //   return this.UsersTagsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.UsersTagsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateUsersStatusDto: UpdateUsersStatusDto,
  // ) {
  //   return this.UsersTagsService.update(+id, updateUsersStatusDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.UsersTagsService.remove(+id);
  // }
}
