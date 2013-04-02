##grunt学习和使用

####[grunt官网](http://gruntjs.com/) 和 [github](https://github.com/gruntjs/)

####1.全局安装grunt
grunt 现在升级到了4.0，安装有所改变

需要node环境，[点击下载和安装node](http://nodejs.org/)

如果之前安装过低版本，先卸载,linux和mac的话可能需要sudo权限,打开cmd,输入:

	npm uninstall -g grunt

然后全局安装grunt-cli:

	npm install -g grunt-cli


####2.配置package.json
进入项目目录(例如:gruntdemo)，新建一个package.json文件,内容如下:

	{
	  "name": "gruntdemo",                // 项目名
	  "version": "0.1.0",                 // 版本号
	  "devDependencies": {
	    "grunt": "*",                 // 依赖插件配置
	    "grunt-contrib-jshint": "*",  // js语法检查
	    "grunt-contrib-uglify": "*",  // 采用UglifyJS压缩js
	    "grunt-contrib-concat": "*"   // 合并文件
	  }
	}

然后在命令行下输入：

	npm install // 安装package.json配置的插件

之后是下载一些文件，完成后目录下面多了一个node_modules文件夹，里面是依赖插件配置包。

####3.创建Gruntfile.js，基本配置如下:

	module.exports = function(grunt) {
	    // 配置
	    grunt.initConfig({
	        pkg : grunt.file.readJSON('package.json'),
	        concat : {
	            domop : {
	                src: ['src/a.js', 'src/b.js'],
	                dest: 'assets/combo.js'
	            }
	        },
	        uglify : {
	            options : {
	                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	            },
	            build : {
	                src : 'assets/ab.js',
	                dest : 'assets/ab-min.js'
	            }
	        }
	    });
	    // 载入concat和uglify插件，分别对于合并和压缩
	    grunt.loadNpmTasks('grunt-contrib-concat');
	    grunt.loadNpmTasks('grunt-contrib-uglify');
	    // 注册任务
	    grunt.registerTask('default', ['concat', 'uglify']);
	}; 


####4.运行grunt
命令行下输入:

	grunt

可以看到合并压缩好的文件。

###5.一些插件和配置

####watch
非常有用，用来监控文件变化自动task

####compass 
sass下的插件

####concat
文件合并

####cssmin
合并压缩css

####livereload
即改即见，有这个不用频繁刷新页面了，提高效率的好工具