require('source-map-support').install();

var gulp = require('gulp');
var mjs = require('gulp-mjs');
var es = require('event-stream');
var zip = require('gulp-zip');

var paths = {
  src: ['index.mjs'],
  dest: '.',
  zip: {
    src: [
      'Dockerfile', 'package.json', '*.js',
      'node_modules/express/**',
      'node_modules/source-map-support/**'],
    name: 'app.zip',
    dest: '.'}
};

gulp.task('build', function () {
  return combine(
    gulp.src(paths.src),
    mjs({debug: true}),
    gulp.dest(paths.dest));
});

gulp.task('pack', ['build'], function () {
  return combine(
    gulp.src(paths.zip.src, {cwdbase: true}),
    zip(paths.zip.name),
    gulp.dest(paths.zip.dest));
});

function onError(err) {
  console.warn(err.stack || err.message || err.toString());
}

function combine() {
  return es.pipeline.apply(null, arguments).on('error', onError);
}

gulp.task('default', ['build']);
