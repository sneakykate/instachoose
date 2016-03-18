var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

gulp.task('browserify', scripts);

function scripts() {
  var bundler = browserify({
    entries: ['./client/main.js'],
    transform: [babelify.configure({
      presets: [ 'es2015', 'react' ],
    })],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  var watcher = watchify(bundler);

  return watcher
    .on('update', function() {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle()
      .on('error', function(err) {
        console.log('Error with compiling components', err.message);
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./build/'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .on('error', function(err) {
      console.log('Error with compiling components', err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
}


gulp.task('default', ['browserify']);
