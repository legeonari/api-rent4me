//Dependencies
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

//Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

async function bootstrap() {
  const whitelist = (process.env.CORS_WHITE_LIST || '').split(',');

  const corsConfig = {
    credentials: true,
    origin: whitelist,
    exposedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'X-Forwarded-Proto',
      'Cookie',
      'Set-Cookie',
      '*',
    ],
  };

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: corsConfig,
    bodyParser: true,
  });

  //Configs Swagger
  const configSwagger = new DocumentBuilder()
    .setTitle('Rent4Me - API')
    .setDescription('Api de acesso a plataforma Rent4Me')
    .setVersion('0.1')
    .setDescription('Sistema Rent4Me - Carros por assinatura')
    .setLicense('Para mais informações', 'rent4me.com.br/contato')
    .addBearerAuth(
      {
        type: 'http',
        schema: 'Bearer',
        bearerFormat: 'Token',
      } as SecuritySchemeObject,
      'Bearer Token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
