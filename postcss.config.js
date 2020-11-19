const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins : [
        require('autoprefixer')({
            grid : true
        }),
        // require('cssnano')({}),
        // purgecss({
        //     content: ['./src/*.html'],
        //     css : ['./src/scss/_uuix.scss']
        // })
    ]
}