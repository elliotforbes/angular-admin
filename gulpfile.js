var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('bundle', function(){
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.js', ['bundle']);
});

