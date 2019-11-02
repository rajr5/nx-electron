import { Configuration, BannerPlugin } from 'webpack';
import * as mergeWebpack from 'webpack-merge';
import * as nodeExternals from 'webpack-node-externals';

import { BuildElectronBuilderOptions } from '../builders/build/build.impl';
import { getBaseWebpackPartial } from './config';

function getElectronPartial(options: BuildElectronBuilderOptions) {
  const webpackConfig: Configuration = {
    output: {
      libraryTarget: 'commonjs'
    },
    target: 'node',
    node: false
  };

  if (options.optimization) {
    webpackConfig.optimization = {
      minimize: false,
      concatenateModules: false
    };
  }

  if (options.externalDependencies === 'all') {
    webpackConfig.externals = [nodeExternals()];
  } else if (Array.isArray(options.externalDependencies)) {
    webpackConfig.externals = [
      function(context, request, callback: Function) {
        if (options.externalDependencies.includes(request)) {
          // not bundled
          return callback(null, 'commonjs ' + request);
        }
        // bundled
        callback();
      }
    ];
  }
  return webpackConfig;
}

export function getElectronWebpackConfig(options: BuildElectronBuilderOptions) {
  return mergeWebpack([
    getBaseWebpackPartial(options),
    getElectronPartial(options)
  ]);
}
