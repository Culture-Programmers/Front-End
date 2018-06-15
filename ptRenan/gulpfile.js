Gulp = {
    self: null,
    uglify: null,
    sass:null,
    init: function () {
        Gulp.self = require('gulp')
        Gulp.sass=require('gulp-sass')
        Gulp.uglify=require('gulp-uglify')
        Gulp.js(),
        Gulp.scss(),
        Gulp.default()
    },
    js: function(){
		Gulp.self.task('js', function(){
			console.log('[JS] Minificando Arquivos JavaScript');
			Gulp.self.src(['./js/src/**/*.js', '!js/dist/**'])
			.pipe(Gulp.uglify())
			.pipe(Gulp.self.dest('./js/dist'))
		});
    },
    scss: function(){
        Gulp.self.task('scss', function(){
                console.log('[SASS] Compilando Arquivos do Sass');
                Gulp.self.src('./assets/scss/*.scss')
                .pipe(Gulp.sass())
                .pipe(Gulp.self.dest('./assets/css'));
        });
      },
      watch: function(){
		Gulp.self.task('watch', function(){
			Gulp.self.watch('./js/**/*.js', ['js']);
			Gulp.self.watch('./assets/scss/*.scss', ['scss']);
		});
    },
    default: () => {    
        Gulp.self.task('default', ['js','scss']);
    }
    
}
Gulp.init();
        