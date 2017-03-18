const gulp = require('gulp');
const s3 = require('gulp-s3');
const awsConfig = require('./awsconfig.json');

gulp.task('deploy', () => {
  gulp.src('./build/**').pipe(s3(awsConfig));
});
