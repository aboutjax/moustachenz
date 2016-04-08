var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');

/**
 * Compile styles
 */
gulp.task('sass', function () {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./css'))
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
