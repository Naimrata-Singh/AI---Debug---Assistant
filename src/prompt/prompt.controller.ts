import { Body, Controller, Post } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { EvaluatePromptDto } from './dto/evaluate-prompt.dto';

@Controller('prompt')
export class PromptController {
    constructor(private readonly promptService: PromptService) { }

    @Post('optimize')
    optimize(@Body('input') input: string) {
        return this.promptService.optimizePrompt(input);
    }

    @Post('evaluate')
    evaluate(@Body() dto: EvaluatePromptDto) {
        return this.promptService.evaluateAndOptimize(dto.prompt);
    }
}
