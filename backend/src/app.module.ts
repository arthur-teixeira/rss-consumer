import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './entity/Provider';
import { ProviderController } from './controllers/provider/provider.controller';
import { ProviderService } from './services/provider/provider.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'rss',
      synchronize: true,
      logging: false,
      entities: [Provider],
      migrations: [],
      subscribers: [],
    }),
    TypeOrmModule.forFeature([Provider]),
  ],
  controllers: [ProviderController],
  providers: [ProviderService],
})
export class AppModule {}
