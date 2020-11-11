const purgecss = require('@fullhuman/postcss-purgecss')
// module.exports ={
//     plugins : {
//         'autoprefixer' : { grid : true }
//     }
// }

module.exports = {
    plugins : [
        require('autoprefixer')({
            grid : true
        }),
        require('cssnano')({}),
        purgecss({
            content: ['./src/*.html']
          })
    ]
}