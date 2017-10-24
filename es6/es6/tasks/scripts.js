import gulp from 'gulp';
import gulpif from 'gulpif';
import concat from 'gulp-concat';
import webpack from "webpack";
import gulpwebpack from "webpack-stream";
import named from "vinyl-named";
import livereload from "gulp-livereload";//自动刷新  热更新
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import gulify from "gulp-uglify";
import {log,colors} from "gulp-util";
import args from "./util/args"