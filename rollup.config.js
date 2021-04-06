import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only'; // 提取css
import pkg from './package.json';

const commonOutput = {
  name: 'blComponent',
  globals: { react: 'React', 'react-dom': 'ReactDOM' },
};

export default {
  input: 'src/components/index.tsx', // 入口文件
  output: [
    {
      format: 'umd',
      file: pkg.main,
    },
    {
      format: 'iife',
      file: pkg.unpkg,
      plugins: [terser()],
    },
  ].map((conf) => ({ ...commonOutput, ...conf })),
  external: ['react', 'react-dom'],
  onwarn: (warning) => {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    console.error(warning.message);
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    css({
      output: 'blComponent.css',
    }),
    typescript({
      exclude: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
};
