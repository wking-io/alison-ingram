var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var htmlmin     = require('gulp-htmlmin');
var uglify      = require('gulp-uglify');
var notify     = require('gulp-notify');
var reload      = browserSync.reload;

// Paths for source
var scss_source = './source/scss/',
    css_source  = './source/css/',
    jade_source = './source/jadefiles/',
    source      = './source';

// Paths for build
var css_build = './build/css/',
    build = './build/';

// Compile jade files to minified html
// ------------------------------------
gulp.task('jade', function () {
  return gulp.src('source/jadefiles/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('source/'))
    .pipe(htmlmin())
    .pipe(gulp.dest('build/'))
    .pipe(reload({stream:true}))
    .pipe(notify('Jade task complete!'));
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
    .pipe(notify('Css task complete!'));
});

// Remove unused css
// ------------------------------------
gulp.task('uncss', function () {
  return gulp.src('source/css/main.css')
   .pipe(cssnano())
   .pipe(gulp.dest('build/css'))
   .pipe(notify('css has been minified'));
});



// Build for dev and prod
// ----------------------------------------------------------------------------
gulp.task('dev', ['jade', 'css']);

gulp.task('prod', ['jade', 'css', 'uncss']);


// Watch
// ----------------------------------------------------------------------------
gulp.task('watch', ['prod'], function () {
  browserSync.init({
    server: build
  })
  gulp.watch('source/**/*.jade', ['jade']);
  gulp.watch('source/**/*.scss', ['css']);
  //gulp.watch(source + '/**/*.js', ['js']);
  gulp.watch('source/**/*.html').on('change', reload);
});

// Default
// ----------------------------------------------------------------------------
gulp.task('default', ['watch'])
