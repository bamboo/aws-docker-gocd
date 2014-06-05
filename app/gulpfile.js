require('source-map-support').install();

var gulp = require('gulp');
var mjs = require('gulp-mjs');
var es = require('event-stream');

var paths = {
  src: ['index.mjs'],
  dest: '.'
};

gulp.task('build', function() {
  return combine(
    gulp.src(paths.src),
    mjs({debug: true}),
    gulp.dest(paths.dest))
  .on('error', onError);
});

function onError(err) {
  console.warn(err.stack || err.message || err.toString());
}

function combine() {
  return es.pipeline.apply(null, arguments);
}

gulp.task('default', ['build']);
