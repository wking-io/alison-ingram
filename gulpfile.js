var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var htmlmin     = require('gulp-htmlmin');
var uglify      = require('gulp-uglify');
var del         = require('del');
var reload      = browserSync.reload;

var filesToMove = './source/assets/**/*.*'

// Delete files in build before rebuild
// ------------------------------------
gulp.task('clean:build', function () {
  return del([
    'build/**/*',
  ]);
});

// Move assets over to build
// ------------------------------------
gulp.task('move', function(){
  gulp.src(filesToMove, { base: 'source' })
  .pipe(gulp.dest('build'));
});

// Compile jade files to minified html
// ------------------------------------
gulp.task('jade', function () {
  return gulp.src('source/jadefiles/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('source/'))
    .pipe(htmlmin())
    .pipe(gulp.dest('build/'))
    .pipe(reload({stream:true}))
});

// Compile SCSS + autoprefixer
// ------------------------------------
gulp.task('css', function () {
  return gulp.src('source/scss/main.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('source/css/'))
    .pipe(reload({stream:true}))
});

// Remove unused css
// ------------------------------------
gulp.task('uncss', function () {
  return gulp.src('source/css/main.css')
   .pipe(cssnano())
   .pipe(gulp.dest('build/css'))
});



// Build for dev and prod
// ----------------------------------------------------------------------------
gulp.task('dev', [ 'clean:build', 'jade', 'css']);

gulp.task('prod', ['clean:build', 'jade', 'css', 'uncss', 'move']);


// Watch
// ----------------------------------------------------------------------------
gulp.task('watch', ['prod'], function () {
  browserSync.init({
    server: 'build'
  })
  gulp.watch('source/**/*.jade', ['jade']).on('change', reload);
  gulp.watch('source/**/*.scss', ['css']).on('change', reload);
  //gulp.watch(source + '/**/*.js', ['js']);
  gulp.watch('source/**/*.html');
});

// Default
// ----------------------------------------------------------------------------
gulp.task('default', ['watch'])
