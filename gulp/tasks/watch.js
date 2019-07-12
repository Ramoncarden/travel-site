var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    watch('./app/index.html', [ 'html' ]);

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});

// gulp.task('watch', function() {
//     gulp.watch('./app/index.html', function() {
//         console.log('html');
//     });
// });
