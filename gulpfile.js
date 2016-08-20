var gulp = require('gulp'),
	watch = require('gulp-watch'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	runSequence = require('run-sequence');


gulp.task('sass', function() {
	return gulp.src('public/stylesheets/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifycss())
		.pipe(gulp.dest('public/stylesheets/css'))
});


gulp.task('concat_css', function() {
	return gulp.src('public/stylesheets/css/*.css')
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('public/stylesheets/css'));
});


gulp.task('watch', ['sass', 'concat_css'], function() {
	gulp.watch('public/stylesheets/sass/*.scss', ['sass']);
	gulp.watch('public/stylesheets/sass/*.css', ['concat_css']);
});


gulp.task('default', function() {
	runSequence(['sass', 'concat_css', 'watch']);
});