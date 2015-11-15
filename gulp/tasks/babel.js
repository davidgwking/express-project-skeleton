'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import babel        from 'gulp-babel';
import sourcemaps   from 'gulp-sourcemaps';

gulp.task('babel', ['clean'], () => {
  const createSourcemap = global.isProd && config.babel.prodSourcemap;

  return gulp.src([config.scripts.src])
        .pipe(gulpif(createSourcemap, sourcemaps.init()))
        .pipe(babel())
        .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
        .pipe(gulp.dest(config.scripts.dest));
});
