import { SetMetadata } from '@nestjs/common';

export const Roles = (...args: Array<'admin' | 'lead'>) =>
  SetMetadata('roles', args);
