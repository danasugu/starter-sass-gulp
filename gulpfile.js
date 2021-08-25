const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css

function style() {
  //1. where is my scss file
  return gulp.src('./scss/**/*.scss')
  //2. pass file through sass compiler
  //3. where do i save the compiled css?

}