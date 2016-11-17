var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/ES6.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
  //
  // Установка BABEL для GULP:
  // 1.Инициализировать npm в папке проекта: npm init
  // 2.Установить для проекта Gulp: npm install --save-dev gulp
  //                        Babel: npm install --save-dev babel-core babel-preset-es2015
  //                               npm install --save-dev gulp-babel
  // 3.В файле package.json  добавить в раздел со скриптами команду для запуска Gulp:
  //                     "scripts": {
  //                       "gulp": "./node_modules/gulp/bin/gulp.js"
  //                     }
  // 4.Создать в папке проекта файл .babelrc со следующим содержимым:
  //                     {
  //                       "presets": ["es2015"]
  //                     }
  //  http://babeljs.io/docs/setup/#installation
  //  https://oriolo.ru/ispolzovanie-es6-v-gulp/
