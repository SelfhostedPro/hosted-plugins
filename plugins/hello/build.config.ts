import { defineBuildConfig } from "unbuild";
import { vueLoader } from "@teages/mkdist-vue-loader"
export default defineBuildConfig({
    entries: [
        "./src/index.ts",
        {
            builder: "mkdist",
            input: "./src/app/",
            pattern: "**/*.vue",
            loaders: [vueLoader],
            outDir: "./dist/app",
        },
        {
            builder: "mkdist",
            input: "./src/app/",
            pattern: "**/*.ts",
            format: 'cjs',
            loaders: ['js'],
            outDir: "./dist/app",
        },
        {
            builder: "mkdist",
            input: "./src/app/",
            pattern: "**/*.ts",
            format: 'esm',
            loaders: ['js'],
            outDir: "./dist/app",
        },
        {
            builder: "mkdist",
            input: "./src/api",
            outDir: "./dist/api",
        }
    ],
    outDir: 'dist',
    declaration: true,
    rollup: {
        emitCJS: true,
    }
})