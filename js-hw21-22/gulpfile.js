var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babel", function () {
  return gulp.src("ES6/src/js.js")
    .pipe(babel())
    .pipe(gulp.dest("ES6/dist/js"));
});

gulp.task('default', ['babel']);
