import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from 'entity/Provider';
import { Repository } from 'typeorm';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
  ) {}

  findAll(): Promise<Provider[]> {
    return this.providerRepository.find();
  }

  findById(id: string): Promise<Provider> {
    return this.providerRepository.findOneBy({ id: parseInt(id) });
  }

  save(provider: Provider): Promise<Provider> {
    return this.providerRepository.save(provider);
  }

  async remove(id: string): Promise<void> {
    await this.providerRepository.delete(id);
  }
}
