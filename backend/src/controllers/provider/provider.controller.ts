import { Body, Controller, Get, Post } from '@nestjs/common';
import { Provider } from 'entity/Provider';
import { ProviderService } from 'services/provider/provider.service';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Get()
  getProviders(): Promise<Provider[]> {
    return this.providerService.findAll();
  }

  @Post()
  saveProvider(@Body() body: Provider): Promise<Provider> {
    return this.providerService.save(body);
  }
}
