import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose:  true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  moduleDirectories: ["node_modules", "bower_components", "src"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};

export default config;
