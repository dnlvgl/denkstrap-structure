( function( window, define, require, undefined ) {

    require.config( {
        enforceDefine: false,
        optimize: 'uglify2',
        waitSeconds: 0,
        catchError: {
            define: true
        },

        paths: {

            // Config will be switched on build
            config:             'config/production',

            // App
            vendor:             'vendor',
            utils:              'utils',

            // Components
            components:         '../',
            modules:            '../modules',
            pattern:            '../pattern',
            site:               '../site',

            // Plugins
            load:               'vendor/plugins/load',
            text:               'vendor/plugins/text',

            // Libraries
            lodash:             'vendor/lodash.build',

            // If it is not necessary to support IE8 its recommended to
            // use jQuery 2.X.X
            //jquery:         '../vendor/jquery-2.1.3'

            // For IE8 support use jquery 1.11.X
            jquery:             'vendor/jquery-1.11.3'

        },

        shim: {
            jquery: {
                exports:        '$'
            }
        },

        // Example for a module package
        packages: [
            {

                // This module can now be required by "modules/test-module"
                // instead of "modules/test-module/test-module"
                name: 'modules/test-module',
                main: 'test-module'
            }
        ]
    } );

    define( [
        'lodash',
        'utils/core'
    ], function( _, App ) {

        // Scope for load plugin
        require.config( {
            globalScope: App
        } );

        require( [
            'config'
        ], function( config ) {

            if ( config.dev ) {

                // Debugging
                window.App = App;
            }

            App.init();

        } );
    } );

}( this, this.define, this.require ) );