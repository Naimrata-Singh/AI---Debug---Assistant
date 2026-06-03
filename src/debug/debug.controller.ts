import { Body, Controller, Post } from '@nestjs/common';
import { DebugService } from './debug.service';
import { DebugDto } from './dto/debug.dto';

@Controller('debug')
export class DebugController {
  constructor(private readonly debugService: DebugService) {}

  @Post()
  async debug(@Body() dto: DebugDto) {
    return this.debugService.debugError(dto.error, dto.code);
  }
}
