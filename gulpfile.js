var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    production = plugins.util.env._[0] === 'build';

var paths = {
    css: {
        src: [ './src/less/**.*' ],
        dist: './assets/css/'
    },
    js: {
        src: [ './src/js/**.*' ],
        dist: './assets/js/'
    }
};

gulp.task('css', function() {
    gulp.src( paths.css.src )
        .pipe( plugins.if(!production, plugins.sourcemaps.init()) )
        .pipe( plugins.less() )
        .pipe( plugins.autoprefixer({
            browsers: ['last 3 versions', '> 1%', 'ie >= 8'],
            cascade: false
        }) )
        .pipe( plugins.combineMediaQueries({ log: false }) )
        .pipe( plugins.concat('style.css') )
        .pipe( plugins.if(production, plugins.csso()) )
        .pipe( plugins.if(!production, plugins.sourcemaps.write()) )
        .pipe( gulp.dest( paths.css.dist ) )
        .on('error', plugins.util.log);
});

gulp.task('js', function() {
    gulp.src( paths.js.src )
        .pipe( plugins.if(!production, plugins.sourcemaps.init()) )
        .pipe( plugins.concat('app.js') )
        .pipe( plugins.if(production, plugins.uglify()) )
        .pipe( plugins.if(!production, plugins.sourcemaps.write()) )
        .pipe( gulp.dest(paths.js.dist) )
        .on('error', plugins.util.log);
});

gulp.task('watch', function() {
    gulp.watch(paths.css.src, ['css']);
    gulp.watch(paths.js.src, ['js']);
});

gulp.task('build', ['css', 'js']);

gulp.task('default', ['build', 'watch']);