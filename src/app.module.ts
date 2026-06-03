import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DebugModule } from './debug/debug.module';
import { PromptModule } from './prompt/prompt.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DebugModule, 
    PromptModule, 
    AiModule
  ],
})
export class AppModule {}
