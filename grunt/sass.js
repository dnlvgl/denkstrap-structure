/**
 * Grunt Sass plugin
 * https://github.com/sindresorhus/grunt-sass
 */

module.exports = {
    options: {
        importer: require( 'node-sass-globbing' )
    },
    development: {
        options: {
            sourceMap: true
        },
        files: { '<%= distPath %>css/main.css': '<%= srcPath %>components/sass/main.scss' }
    },
    production: {
        options: {
            outputStyle: 'compressed'
        },
        files: { '<%= distPath %>css/main.css': '<%= srcPath %>components/sass/main.scss' }
    },
    styleguide: {
        options: {
            // sourceMap: true
        },
        files: { '<%= distPath %>styleguide/css/sg-custom.css': '<%= srcPath %>components/sass/sg-custom.scss' }
    }
};
