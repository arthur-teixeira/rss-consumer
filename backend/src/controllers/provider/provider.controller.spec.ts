import { Test, TestingModule } from '@nestjs/testing';
import { Provider } from 'entity/Provider';
import { ProviderService } from 'services/provider/provider.service';
import { ProviderController } from './provider.controller';

describe('ProviderController', () => {
  let providerController: ProviderController;
  let providerService: ProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProviderController],
      providers: [ProviderService],
    }).compile();

    providerController = module.get<ProviderController>(ProviderController);
    providerService = module.get<ProviderService>(ProviderService);
  });

  it('should return all providers', async () => {
    const providers: Provider[] = [
      {
        id: 1,
        name: 'teste',
        url: 'teste.com.br',
      },
    ];

    jest
      .spyOn(providerService, 'findAll')
      .mockReturnValue(Promise.resolve(providers));

    expect(await providerController.getProviders()).toEqual(providers);
  });
});
