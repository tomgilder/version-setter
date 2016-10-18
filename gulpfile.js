var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', ['copyFiles', 'compile'], function()
{
  return gulp.src('./config/**/*.json').pipe(gulp.dest('./dist'));
});

gulp.task('compile', function (done)
{
  exec('tsc -p ./src --outDir _build --rootDir ./src', function(err, stdOut, stdErr)
  {
    console.log(stdOut);
    if (err)
    {
      done(err);
    }
    else
    {
      done();
    }
  });
});

gulp.task('copyFiles', function()
{
  return gulp.src('./src/**/*.{png,svg,sh,json,md}').pipe(gulp.dest('./_build'));
});