import { makeSchema } from 'nexus';
import { join } from 'node:path';
import * as types from '../types';

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
    schema: join(process.cwd(), 'graphql', 'schema', 'schema.graphql')
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql', 'context', 'context.ts')
  }
});
