import type { Config } from '@jest/types';
import { verbose } from 'winston';

const config: Config.InitialOptions = {
  // "moduleFileExtensions": [
  //     "js",
  //     "json",
  //     "ts"
  //   ],
  //   "rootDir": "src",
  //   "testRegex": ".*\\.spec\\.ts$",
  //   "transform": {
  //     "^.+\\.(t|j)s$": "ts-jest"
  //   },
  //   "collectCoverageFrom": [
  //     "**/*.(t|j)s"
  //   ],
  //   "coverageDirectory": "../coverage",
  //   "testEnvironment": "node"
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  moduleDirectories: ['node_modules'],
};
export default config;
