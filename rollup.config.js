import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import serve from "rollup-plugin-serve";
export default {
    input: 'src/captcha.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true,
        name: 'reactCaptchaSimple',
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx'],
        }),
        babel({
            presets: ['@babel/preset-react'],
            // exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        replace({
            preventAssignment: false,
            'process.env.NODE_ENV': JSON.stringify( 'development' )
        }),
        serve({
            open: true,
            verbose: true,
            contentBase: ['', 'public'],
            host: 'localhost',
            port: 3000,
        }),
        livereload({ watch: 'dist' }),
    ],
    external: ['canvas'],
};