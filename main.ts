// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';
// import { ValidationPipe } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe());
//   await app.listen(5000);
// }
// bootstrap();



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    credentials: true, // If you need to include cookies or authentication
  });

  await app.listen(5000); // Make sure the backend is running on port 5000
}
bootstrap();
