const mix = require('laravel-mix');
require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});


if (!mix.inProduction()) {
    mix.webpackConfig({
            devtool: 'source-map'
        })
        .sourceMaps()
}
mix.sass('resources/scss/react.scss', 'public/css');

mix.js('resources/js/authReact/index.jsx', 'public/js/authReact.js').react();
mix.js('resources/js/auth/index.jsx', 'public/js/auth.js').react();
mix.js('resources/js/index.jsx', 'public/js/index.js').react();
mix.browserSync({
    host: 'localhost',
    port: 3000,
    proxy: {
        target: process.env.APP_URL // Yay! Using APP_URL from the .env file!
    }
});

// add versioning
mix.version();