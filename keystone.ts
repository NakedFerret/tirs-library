import { config } from '@keystone-6/core';
import { lists } from './schema';
import { insertSeedData } from './seed-data';
import { Context } from '.keystone/types';

export default config({
  db: {
    provider: 'sqlite',
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
    extendExpressApp(app) {
      app.get('/_script/bundle.js', (req, res) => {
        const cwd = process.cwd();
        res.sendFile('bundler.js', {
          root: (cwd + '/node_modules/tirs-widgets/public/workers')
        });
      });
    },
  },
});
