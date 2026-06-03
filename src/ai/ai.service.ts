import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {
  async generateResponse(prompt: string): Promise<any> {
    try {
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions', // Groq API URL
        {
          model: 'llama-3.3-70b-versatile', // Latest Groq Free Model
          messages: [
            { role: 'system', content: 'You are a senior backend engineer.' },
            { role: 'user', content: prompt },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Your Groq API Key goes here
          },
        },
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI Error:', error.response?.data || error.message);
      throw new HttpException(
        'Failed to communicate with the AI service. Please check your API key.',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
