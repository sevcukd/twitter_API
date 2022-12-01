import { Mongoose } from 'mongoose';
import { UserSchema } from './entities/user.schema';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
