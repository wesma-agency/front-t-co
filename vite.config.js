import path from "path";
import injectHTML from "vite-plugin-html-inject";
import copy from "rollup-plugin-copy";

export default {
    base: "./",
    plugins: [
        injectHTML(),
        copy({
            targets: [{ src: "pgs-panel/**/*", dest: "dist/pgs-panel" }],
            hook: "writeBundle",
        }),
    ],
    server: {
        // open: true,
    },
    root: "./",
    build: {
        rollupOptions: {
            input: {
                index: "index.html",
                category: "category.html",
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            public: `${path.resolve(__dirname, "./public/")}`,
            pages: path.resolve(__dirname, "./src/html"),
        },
    },
    preview: {
        // open: true,
    },
};
