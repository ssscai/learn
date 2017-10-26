import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
//gulp的task默认是异步执行，加return后才是同步执行。gulpSequence--->gulp顺序执行任务