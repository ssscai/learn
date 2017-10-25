import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from "webpack";
import gulpwebpack from "webpack-stream";
import named from "vinyl-named";
import livereload from "gulp-livereload"; //自动刷新  热更新
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import {
    log,
    colors
} from "gulp-util";
import args from "./util/args";
gulp.task('scripts', function () {
    return gulp.src(['app/js/index.js']) //打开
        //错误处理
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpwebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, function (err, stats) {
            log(`Finished '${color.cyan('script')}'`, stats.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({
            compress:{
                properties:false
            },
            output:{
                'quote_keys':true
            }
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})