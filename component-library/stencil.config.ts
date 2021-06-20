import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-library',
  devServer: {
    port: 3737,
    openBrowser: false,
  },
  globalStyle: 'src/global/styles/variables.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
