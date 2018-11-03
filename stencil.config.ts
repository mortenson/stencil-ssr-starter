import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-ssr',
  buildEs5: true,
  outputTargets: [
    {
      type: 'www'
    }
  ],
  hashFileNames: false
};
