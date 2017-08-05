var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('hello world');
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/*.html', browserSync.reload);
  gulp.watch('./src/**/*.js', browserSync.reload);
// add other watches here
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});
