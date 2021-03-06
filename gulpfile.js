/**---------------------------------------------------------------------------------------------------------------------
 * tgi-spec/gulpfile.js
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var childProcess = require('child_process');


// Source and packaging
var libFiles = [
  'lib/packaging/lib-header',
  'lib/tgi-utility.source.js',
  'lib/tgi-utility-objects.source.js',
  'lib/tgi-utility-arrays.source.js',
  'lib/tgi-utility-strings.source.js',
  'lib/packaging/lib-footer'
];

// The Spec
var specFiles = [
  'lib/packaging/spec-header',
  'lib/tgi-utility.test.js',
  'lib/tgi-utility-objects.test.js',
  'lib/tgi-utility-arrays.test.js',
  'lib/tgi-utility-strings.test.js',
  'lib/packaging/spec-footer'
];

// Build Lib
gulp.task('_buildLib', function () {
  return gulp.src(libFiles)
    .pipe(concat('tgi.utility.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('tgi.utility.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Build Spec
gulp.task('_buildSpec', function () {
  return gulp.src(specFiles)
    .pipe(concat('tgi.utility-test.js'))
    .pipe(gulp.dest('dist'));
});

// Build Task
gulp.task('build', ['_buildLib', '_buildSpec'], function (callback) {
  callback();
});

// Lint Lib
gulp.task('_lintLib', ['_buildLib'], function (callback) {
  return gulp.src('dist/tgi.utility.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Lint Spec
gulp.task('_lintSpec', ['_buildSpec'], function (callback) {
  return gulp.src('dist/tgi.utility-test.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Lint Task
gulp.task('lint', ['_lintLib', '_lintSpec'], function (callback) {
  callback();
});

// Test Task
gulp.task('test', ['lint'], function (callback) {
  childProcess.exec('node spec/node-runner.js', function (error, stdout, stderr) {
    console.log(stdout);
    callback(error);
  });
});

// Coverage Task
gulp.task('cover', function (callback) {
  childProcess.exec('istanbul cover spec/node-runner.js', function (error, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    callback(error);
  });
});

// Spec Task
gulp.task('spec', ['lint'], function (callback) {
  setTimeout(function () {
    childProcess.exec('node spec/node-make-spec-md.js', function (error, stdout, stderr) {
      console.log(stdout);
      callback(error);
    });
  }, 100); // Without this sometimes the exec runs before script is written/flushed ?
});

// Default Task
gulp.task('default', ['test']);