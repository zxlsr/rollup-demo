import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const commonOutput = {
  name: 'blComponent',
  globals: { react: 'React', 'react-dom': 'ReactDOM', antd: 'antd' },
};

export default {
  input: 'src/components/index.tsx', // 入口文件
  output: [
    {
      format: 'umd',
      file: pkg.main,
    },
    {
      format: 'umd',
      file: pkg.unpkg,
      plugins: [terser()],
    },
  ].map((conf) => ({ ...commonOutput, ...conf })),
  external: ['react', 'react-dom', 'antd'],
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({
      exclude: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
};
