import { Injectable } from '@nestjs/common';
import { AiService } from '../ai/ai.service';
import { buildDebugPrompt } from '../common/utils/prompt-builder';

@Injectable()
export class DebugService {
  constructor(private readonly aiService: AiService) {}

  async debugError(error: string, code: string) {
    const prompt = buildDebugPrompt(error, code);
    const result = await this.aiService.generateResponse(prompt);

    return {
      status: 'ok',
      data: result,
    };
  }
}
