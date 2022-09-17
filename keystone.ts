import { config } from '@keystone-6/core';
import { lists } from './schema';
import { insertSeedData } from './seed-data';
import { Context } from '.keystone/types';

export default config({
  db: {
    provider: process.env.DATABASE_URL ? 'postgresql' : 'sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone-example.db',
    async onConnect(context: Context) {
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(context);
      }
    },
  },
  lists,
  server: {
    port: Number(process.env.PORT) || 3000,
  },
});
