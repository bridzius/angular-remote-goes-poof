import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remotes-test',
  exposes: {
    './Routes': 'remotes/test/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
