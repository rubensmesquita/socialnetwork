module.exports = {

    entry: './web/app/lib/index.js',

    output: {

        path: './src/app/public/js/',

        filename: 'app.js'

    },

     module: {

        loaders: [{

            test: /\.js?$/,

            exclude: /node_modules/,

            loader: 'babel-loader',

            query: {

                presets: ['es2015']

            }

        }]

    }

}
