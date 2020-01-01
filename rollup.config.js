import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/suntimes.js',
      name: pkg.name,
      format: 'umd',
      exports: 'named',
      compact: true
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

export default config;
