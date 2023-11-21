import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { hostname } from 'os';
import * as path from 'path';
import process from 'process';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
  app.enableCors();
  await app.listen(3001,()=>{
    console.log('Your server is running on http://localhost:3001')
  });
}
bootstrap();
