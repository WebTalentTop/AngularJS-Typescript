//(function (global) {

//    // map tells the System loader where to look for things
//    var map = {
//        'app': 'app',
//        'rxjs': 'lib/rxjs',
//        '@angular': 'lib/@angular'
//    };

//    // packages tells the System loader how to load when no filename and/or no extension
//    var packages = {
//        'app': { main: 'main.js', defaultExtension: 'js' },
//        'rxjs': { defaultExtension: 'js' },
//        //,
//        'angular2-in-memory-web-api': { defaultExtension: 'js' }
//    };

//    var packageNames = [
//      '@angular/common',
//      '@angular/compiler',
//      '@angular/core',
//      '@angular/http',
//      '@angular/platform-browser',
//      '@angular/platform-browser-dynamic',
//      '@angular/router',
//      '@angular/router-deprecated',
//      '@angular/upgrade'
//    ];

//    packageNames.forEach(function (pkgName) {
//        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
//    });

//    // Individual files (~300 requests):
//    function packIndex(pkgName) {
//        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
//    }
//    // Bundled (~40 requests):
//    function packUmd(pkgName) {
//        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
//    }
//    // Most environments should use UMD; some (Karma) need the individual index files
//    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
//    // Add package entries for angular packages
//    packageNames.forEach(setPackageConfig);
//    var config = {
//        map: map,
//        packages: packages
//    };
//    System.config(config);

//})(this);


/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'primeng': 'npm:primeng',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'lib/primeng': {
                format: 'cjs',
                defaultExtension: 'js'
            }
        }
    });
})(this);
