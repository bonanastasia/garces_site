var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('hello world');
});

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./**/*.js', browserSync.reload);
// add other watches here
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: true,
  })
});
