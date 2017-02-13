var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function () {
  connect.server({
    root: '.',
    port: 9002,
    livereload: true
  });
});