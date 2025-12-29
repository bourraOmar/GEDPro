import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [UsersService, ...userProviders],
  exports: [UsersService]
})
export class UsersModule {}
