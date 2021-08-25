const gulp = require('gulp');
// const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

//compile scss into css

async function style() {
  //1. where is my scss file
  return await gulp
    .src('./scss/**/*.scss')
    //2. pass file through sass compiler
    .pipe(sass())
    //3. where do i save the compiled css?
    .pipe(gulp.dest('./css'));
}

exports.style = style;
