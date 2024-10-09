import express from 'express';
import { baseLoader } from './loaders';

async function main() {
  const app = express();

  await baseLoader(app);

  app
    .listen(8000, () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${8000} 🛡️
      ################################################
    `);
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
}

main();
