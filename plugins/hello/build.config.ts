import { defineBuildConfig } from "unbuild";
export default defineBuildConfig({
    entries: [
        "./src/index.ts",
        {
            builder: "mkdist",
            input: "./src/app/",
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