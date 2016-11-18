/// <binding AfterBuild='copy-@types, copy-all, copy-dev-res, copy-dev-res-all, copy-dev-ts-sourceMap, copy-front-dev-only' /> 
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";
var gulp = require("gulp");
//var sass = require('gulp-sass');

var root_path = {
    webroot: "./wwwroot/",
    app: "./app/",
};
//library source
root_path.nmSrc = "./node_modules/";
root_path.primeResources = "./resources/";
//library destination

var apiServiceLocalOption1Url = "./EnvironmentApiUrl/localoption1/";
var apiServiceLocalOption2Url = "./EnvironmentApiUrl/localoption2/";
var apiServicePreProdUrl = "./EnvironmentApiUrl/preprod/";
var apiServiceQAUrl = "./EnvironmentApiUrl/qa/";
var apiServiceDestinationUrl = './app/shared/services/apiUrlconst/';


root_path.package_lib = root_path.webroot + "lib-npm/";
gulp.task("copy-systemjs", function () {
    return gulp.src(root_path.nmSrc + '/systemjs/dist/**/*.*', {
        base: root_path.nmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/systemjs/'));
});
gulp.task("copy-angular2", function () {
    return gulp.src(root_path.nmSrc + '/angular2/bundles/**/*.js', {
        base: root_path.nmSrc + '/angular2/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/'));
});
gulp.task("copy-es6-shim", function () {
    return gulp.src(root_path.nmSrc + '/es6-shim/es6-sh*', {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim/'));
});
gulp.task("copy-rxjs", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/bundles/*.*', {
        base: root_path.nmSrc + '/rxjs/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
});

gulp.task("NMprimeResources", function () {
    gulp.src(root_path.primeResources + "**/*", { base: root_path.primeResources })
        .pipe(gulp.dest(root_path.webroot + "resources/"));
});
gulp.task("primeResources", function () {
    gulp.src(root_path.nmSrc + "primeng/**/*", { base: root_path.primeResources })
        .pipe(gulp.dest(root_path.package_lib + "primeng/"));
});

gulp.task("html", function () {
    gulp.src(root_path.app + "**/*.html", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task('htmlwatch', function () {
    gulp.watch(root_path.app + "**/*.html", ['html']);
});

gulp.task("css", function () {
    gulp.src(root_path.app + "**/*.css", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});
gulp.task("sourceMap", function () {
    gulp.src(root_path.app + "**/*.map", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task("ts", function () {
    gulp.src(root_path.app + "**/*.ts", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task("copy-@types", function () {
    return gulp.src(root_path.nmSrc + '/es6-shim/es6-sh*', {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim/'));
});

gulp.task("copy-locationoption1",
    function () {
        return gulp.src(apiServiceLocalOption1Url + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });
gulp.task("copy-locationoption2",
    function () {
        return gulp.src(apiServiceLocalOption2Url + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });
gulp.task("copy-preprodlocation",
    function () {
        return gulp.src(apiServicePreProdUrl + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });
gulp.task("copy-qalocation",
    function () {
        return gulp.src(apiServiceQAUrl + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("tsCompile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(root_path.webroot + "app/"));
});

//gulp.task('sass', function () {
//    gulp.src(root_path.primeResources + '**/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest(function (f) {
//            console.log("--- F.base ----", f.base);
//            return f.base;
//        }))
//        .pipe(gulp.dest('./library/resources'));
//});


gulp.task("prepod-deployment-package", ['copy-preprodlocation', 'tsCompile', 'css', 'html', 'sourceMap', 'ts']);

gulp.task("copy-dev-res", ["ts", 'sourceMap', 'css', 'html']);

gulp.task("copy-dev-res-all", ["ts", 'sourceMap', 'css', 'html', 'NMprimeResources', 'primeResources']);

gulp.task("copy-front-dev-only", ['css', 'html']);
gulp.task("copy-dev-ts-sourceMap", ["ts", 'sourceMap']);


gulp.task("copy-all", ["copy-rxjs", 'copy-angular2', 'copy-systemjs', 'copy-es6-shim']);