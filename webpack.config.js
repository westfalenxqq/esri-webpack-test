var webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            './scripts/bootstrap.js' // entry point for your application code
        ],
        vendor: [
            // put your third party libs here
        ]
    },
    output: {
        filename: '[name].bundle.js',
        // the bundled output will be loaded by the Dojo AMD loader
        // that is included in the ArcGIS API for JavaScript
        libraryTarget: 'amd'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    module: {
        loaders: [
            // css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [

    ],
    externals: [
        function (context, request, callback) {
            // exclude any esri or dojo modules from the bundle
            // these are included in the ArcGIS API for JavaScript
            // and its Dojo loader will pull them from its own build output
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)) {
                return callback(null, 'amd ' + request);
            }
            callback();
        }
    ]
};