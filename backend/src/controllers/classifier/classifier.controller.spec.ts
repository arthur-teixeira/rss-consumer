import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import assert from 'assert';
import { Classification } from 'entity/Classification';
import { ClassifierController } from './classifier.controller';

describe('ClassifierController', () => {
  let controller: ClassifierController;
  let mockSave = jest.fn();
  let mockFindOneBy = jest.fn();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassifierController],
      providers: [
        {
          provide: getRepositoryToken(Classification),
          useValue: {
            save: mockSave,
            findOneBy: mockFindOneBy,
          },
        },
      ],
    }).compile();

    jest.clearAllMocks();
    controller = module.get<ClassifierController>(ClassifierController);
  });

  it('should update classification', async () => {
    const classifcation: Classification = {
      id: 1,
      articleId: 1,
      rating: 'Positive',
    };
    const newClassification = await controller.updateClassification(
      classifcation,
    );
    expect(mockSave).toHaveBeenCalledWith(classifcation);
    expect(newClassification).toEqual(classifcation);
  });

  it('should return classification for article', async () => {
    const articleId = 1;

    mockFindOneBy.mockReturnValue({ rating: 'Positive', id: 1 });

    expect(await controller.getRating(articleId)).toEqual({
      rating: 'Positive',
    });
  });

  it('should return error when articleId is not defined', async () => {
    try {
      await controller.getRating();
      throw new Error('deveria dar erro');
    } catch (error) {
      expect(error.message).toEqual('No article was provided');
    }
  });

  it('should return error when classification is not found', async () => {
    mockFindOneBy.mockReturnValue({});
    const articleId = 1;
    try {
      await controller.getRating(articleId);
      throw new Error('deveria dar erro');
    } catch (error) {
      expect(error.message).toEqual('No classification was found');
    }
  });
});
