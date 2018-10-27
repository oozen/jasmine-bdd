var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('jasmine-lib', function () {
    // json2.js ve node_boot.js silinebilir
    gulp.src(['node_modules/jasmine-core/lib/jasmine-core/jasmine.css','node_modules/jasmine-core/lib/console/console.js', 'node_modules/jasmine-core/lib/jasmine-core/*.js']).pipe(gulp.dest('lib/jasmine-2.5.3'));
});