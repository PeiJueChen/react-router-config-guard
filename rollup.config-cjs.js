import babel from "@rollup/plugin-babel";
const replace = require("rollup-plugin-replace");
const commonjs = require("@rollup/plugin-commonjs");
import nodeResolve from "@rollup/plugin-node-resolve";
// uglify , 丑化
const { uglify } = require("rollup-plugin-uglify");

const path = require("path");
const pkg = require("./package.json");

const globals = { react: "React", "react-router": "ReactRouter", "react-router-dom": "ReactRouterDom" };

function isBareModuleId(id) {
    return (
        !id.startsWith(".") && !id.includes(path.join(process.cwd(), "src"))
    );
}

module.exports = [
    {
        input: "src/index.jsx",
        output: {
            file: `cjs/${pkg.name}.js`,
            sourcemap: true,
            format: "cjs",
            esModule: false
        },
        external: isBareModuleId,
        plugins: [
            babel({ exclude: /node_modules/, sourceMaps: true, moduleRoot: "upward" }),
            replace({ "process.env.NODE_ENV": JSON.stringify("development") })
        ]
    },
    {
        input: "src/index.jsx",
        output: { file: `cjs/${pkg.name}.min.js`, sourcemap: true, format: "cjs" },
        external: isBareModuleId,
        plugins: [
            babel({ exclude: /node_modules/, sourceMaps: true, moduleRoot: "upward" }),
            replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
            uglify()
        ]
    }
]