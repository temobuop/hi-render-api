import app from './src/app.js';
import Bun from 'bun';

Bun.serve({
  port: process.env.PORT || 3030,
  fetch: app.fetch,
  idleTimeout: 30,
});
