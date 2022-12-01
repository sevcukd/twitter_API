import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://admin:57Z3iynx28RpyrwL@my-test-cluster.d8952ne.mongodb.net/nest-test',
      ),
  },
];
