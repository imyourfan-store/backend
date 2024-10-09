import { Application } from 'express';
import { expressLoader } from './express';

export async function baseLoader(expressApp: Application) {
  await expressLoader(expressApp);
}
