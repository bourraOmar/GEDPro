import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { Inject } from '@nestjs/common';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
