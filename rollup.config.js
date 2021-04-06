import babel from "@rollup/plugin-babel";
const replace = require("rollup-plugin-replace");
const commonjs = require("@rollup/plugin-commonjs");
import nodeResolve from "@rollup/plugin-node-resolve";
// uglify , 丑化
const { uglify } = require("rollup-plugin-uglify");

// const path = require("path");
const pkg = require("./package.json");

const globals = { react: "React", "react-router": "ReactRouter", "react-router-dom": "ReactRouterDom" };

module.exports = [
    {
        input: "./src/index.jsx",
        output: {
            file: `umd/${pkg.name}.js`,
            sourcemap: true,
            sourcemapPathTransform: relativePath =>
                relativePath.replace(/^.*?\/node_modules/, "../../node_modules"),
            format: "umd",
            name: "ReactRouterConfigGuard",
            globals
        },
        external: Object.keys(globals),
        plugins: [
            babel({
                exclude: /node_modules/,
                babelHelpers: "runtime"
            }),
            nodeResolve(),
            commonjs({
                include: /node_modules/
            }),
            replace({
                "process.env.NODE_ENV": JSON.stringify("development")
            })
        ]
    },
    {
        input: "./src/index.jsx",
        output: {
            file: `umd/${pkg.name}.min.js`,
            sourcemap: true,
            sourcemapPathTransform: relativePath =>
                relativePath.replace(/^.*?\/node_modules/, "../../node_modules"),
            format: "umd",
            name: "ReactRouterConfigGuard",
            globals
        },
        external: Object.keys(globals),
        plugins: [
            babel({
                exclude: /node_modules/,
                babelHelpers: "runtime"
            }),
            nodeResolve(),
            commonjs({
                include: /node_modules/
            }),
            replace({
                "process.env.NODE_ENV": JSON.stringify("production")
            }),
            uglify()
        ]
    }
]