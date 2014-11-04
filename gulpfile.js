var gulp = require('gulp');
var jshint = require('gulp-jshint');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var mdox = require('gulp-mdox');
var benchmark = require('gulp-bench');

var paths = {
  src: ['*.js'],
  tests: ['test/*.js'],
  benchmarks: ['benchmark/*.js']
};

gulp.task('lint', function(){
  return gulp.src(paths.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('docs', function() {
  return gulp.src('multikey-hash.js')
    .pipe(mdox({
      name: "API.md",
      github: true
    }))
    .pipe(gulp.dest("./"));
});

gulp.task('bench', function() {
  return gulp.src(paths.benchmarks)
    .pipe(benchmark());
});

gulp.task('test', function(){
  return gulp.src(paths.src)
    .pipe(istanbul())
    .on('finish', function(){
      gulp.src(paths.tests)
        .pipe(mocha())
        .pipe(istanbul.writeReports());
    });
});

gulp.task('watch', function(){
  gulp.watch([paths.src, paths.tests], ['lint', 'test', 'docs']);
});