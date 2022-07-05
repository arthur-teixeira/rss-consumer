import { Test, TestingModule } from '@nestjs/testing';
import { ClassifierController } from './classifier.controller';

describe.only('ClassifierController', () => {
  let controller: ClassifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassifierController],
    }).compile();

    controller = module.get<ClassifierController>(ClassifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
