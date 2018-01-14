let gulp         = require('gulp'),
    scss         = require('gulp-sass'),
    sync         = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});

// gulp.src("app/css/main.css")
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("app/css/ner.css"))


gulp.task("scss", function () {
    return gulp.src("app/scss/main.scss")
        .pipe(scss())
        .pipe(gulp.dest("app/css/"))
        .pipe(sync.stream());

});

gulp.task('server', function () {
    sync.init({
        server: {
            baseDir: "app"
        },
        notify: false,
        browser: "chrome"
    });
    // sync.watch('app', sync.reload)
});

gulp.task('watch', function () {
    gulp.watch("app/scss/main.scss", gulp.task('scss'));
});

gulp.task('default', gulp.parallel('watch', 'server'));


// let watch = require('gulp-watch');

// gulp.task('watch', function (done) {
//     watch('app/scss/main.scss')
//         .pipe(scss())
//         .pipe(gulp.dest("app/css/"))
//
// });

