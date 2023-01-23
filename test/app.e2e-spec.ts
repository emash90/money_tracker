import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/wallets (GET)', () => {
    return request(app.getHttpServer())
      .get('/wallets')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual(expect.any(Array));
      })
  }, 10000);

  it('/expenses (GET)', () => {
    return request(app.getHttpServer())
      .get('/expenses')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual(expect.any(Array));
      })
  })
  
  it('/incomes (GET)', () => {
    return request(app.getHttpServer())
      .get('/incomes')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual(expect.any(Array));
      })
  })

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'admin', password: 'admin' })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual(expect.any(Object));
      })
  })

});
