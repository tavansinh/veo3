import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { pluginHtmlMinifierTerser } from 'rsbuild-plugin-html-minifier-terser';
export default defineConfig({
    module: {},
    tools: {
        postcss: {
            postcssOptions: {
                plugins: [tailwindcss]
            }
        }
    },
    html: {
        favicon: './src/assets/icon.ico',
        title: 'Veo 3 AI Video Generation with Realistic Sound',
        meta: {
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
    },
    performance: {
        buildCache: true,
        printFileSize: true,
        removeConsole: true,
        removeMomentLocale: true
    },
    plugins: [
        pluginReact(),
        pluginHtmlMinifierTerser({
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeTagWhitespace: true,
            sortAttributes: true,
            sortClassName: true,
            html5: true
        })
    ]
});
