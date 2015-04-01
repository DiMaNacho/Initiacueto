var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    gulpif      = require('gulp-if'),
    csso        = require('gulp-csso'),
    gutil       = require('gulp-util');

var isProduction = gutil.env._[0] === 'build';

gulp.task('css', function() {
    gulp.src(paths.css.src)
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulpif(isProduction, csso()))
        .pipe(gulp.dest(paths.css.dist))
        .on('error', gutil.log);
});

gulp.task('watch', function() {
    gulp.watch(paths.css.src, ['css']);
});

gulp.task('build', ['css']);

gulp.task('default', ['build', 'watch']);