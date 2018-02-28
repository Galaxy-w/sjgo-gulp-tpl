var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    $ = gulpLoadPlugins();

gulp.task('json', function () {
    return gulp.src('./src/json/*')
        .pipe(gulp.dest('./dist/json'));
});

gulp.task('vendor', function () {
    return gulp.src('./src/js/vendor/*')
        .pipe(gulp.dest('./dist/js/vendor'));
});

gulp.task('script', function () {
    return gulp.src('./src/js/*')
        .pipe($.uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('image', function () {
    return gulp.src('./src/images/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('less', function () {
    return gulp.src('./src/less/*')
        .pipe($.less())
        .pipe($.cssnano())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('css', function () {
    return gulp.src('./src/css/*')
        .pipe($.cssnano())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['html', 'less', 'css', 'image', 'script', 'vendor', 'json']);