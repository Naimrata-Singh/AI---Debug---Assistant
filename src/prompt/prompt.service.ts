import { Injectable } from '@nestjs/common';
import { AiService } from '../ai/ai.service';

@Injectable()
export class PromptService {
  constructor(private readonly aiService: AiService) {}

  async evaluateAndOptimize(userPrompt: string) {
    const metaPrompt = `
You are an expert Prompt Engineer. Evaluate the effectiveness of the following user prompt:

---
PROMPT START:
${userPrompt}
PROMPT END:
---

Analyze it based on these criteria:
1. Persona: Does it define who the AI should be?
2. Instructions: Are the commands clear and actionable?
3. Delimiters: Are data and instructions clearly separated?
4. Reasoning: Does it ask for step-by-step thinking?

Output Format:
(Please use double line breaks between each section to ensure readability)

- Effectiveness Score: (1-10)

- Analysis: (Briefly explain what is missing or good)

- Suggested Improved Prompt: (Provide the full refined version of the prompt using best practices)
`;

    const result = await this.aiService.generateResponse(metaPrompt);
    
    return {
      status: 'ok',
      data: result
    };
  }

  async optimizePrompt(input: string) {
    const metaPrompt = `
Improve the following prompt for better accuracy and structure:

"${input}"

Add:
- Clear instructions
- Step-by-step reasoning
- Proper format
`;

    return this.aiService.generateResponse(metaPrompt);
  }
}
