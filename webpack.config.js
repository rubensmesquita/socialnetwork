module.exports = {

    entry: './web/app/lib/app.js',

    output: {

        path: './src/public/js/',

        filename: 'app.js'

    },

     module: {

        loaders: [{

            test: /\.js?$/,

            exclude: /node_modules/,

            loader: 'babel',

            query: {

                presets: ['es2015']

            }

        }]

    }

}
