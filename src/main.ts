import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(); // This allows Hoppscotch to connect!
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3007);

    // console.log(' Server running on http://localhost:3006');
}

bootstrap();
