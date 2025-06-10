/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import { extname, relative, resolve } from "path"
import { fileURLToPath } from "node:url"
import { glob } from "glob"
import solidPlugin from 'vite-plugin-solid'
import { libInjectCss } from "vite-plugin-lib-inject-css"
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [
        solidPlugin(),
        libInjectCss(),
        dts({ include: ['lib'] })
    ],
    server: {
        port: 3000
    },
    test: {
        environment: 'jsdom',
        globals: false,
        setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
        isolate: false
    },
    build: {
        copyPublicDir: false,
        lib : {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"]
        },
        rollupOptions: {
            external: ["solid-js", "pixi.js"],
            input: Object.fromEntries(
                glob.sync("lib/**/*.{ts,tsx}", {
                    ignore: ["lib/**/*.d.ts"],
                }).map(file => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    relative(
                        "lib",
                        file.slice(0, file.length - extname(file).length)
                    ),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            output: {
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js",
                globals: {
                    "solid-js": "solid-js",
                    "pixi.js": "pixi.js"
                }
            }
        },
        target: 'esnext'
    },
    resolve: {
        conditions: ['development', 'browser']
    }
})