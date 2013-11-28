##grunt打包构建seajs项目
主要需要两个模块：

*	cmd模块依赖提取

		grunt-cmd-transport

* cmd文件合并

		grunt-cmd-concat

### 文件目录结构

	-- 项目根目录
		|-- assets
			|-- libs 第三方js库，如seajs,jquery等
			|-- mods 项目脚本目录

		|-- dist 打包后生成的目录

		|-- Gruntfile.js grunt配置文件

		|-- package.json node所需模块文件

### package.json文件

	{
	  "name": "hello",
	  "version": "0.1.0",
	  "devDependencies": {
	        "grunt": "~0.4.1",
	        "grunt-cmd-transport": "~0.1.1",		// cmd文件依赖提取模块
	        "grunt-cmd-concat": "~0.2.0",				// cmd文件合并
	        "grunt-contrib-uglify": "~0.2.0", 	// js文件压缩
	        "grunt-contrib-clean": "~0.4.0"   	// 清除临时目录
	    }
	}

### Gruntfile.js文件

	module.exports = function(grunt) {
	    grunt.initConfig({
	        // 提取依赖
	        transport: {
	            mod: {
	                options: {
	                    format: 'dist/mods/{{filename}}' // 模块的id格式,用于合并后的路径
	                },
	                files: [{
	                    cwd: 'assets/mods', // 需要提取依赖文件的相对路径
	                    src: ['**/*.js'], // 需要提取依赖的文件
	                    dest: '.build' // 提取后存放的临时文件夹
	                }]
	            }
	        },
	        // 合并
	        concat: {
	            mod: {
	                options: {
	                    include: 'all'
	                },
	                files: [{
	                    expand: true,
	                    cwd: '.build/', // 需要合并的文件夹路径
	                    src: ['**/*.js'], // 需要合并的文件
	                    dest: 'dist/mods/', // 合并后存放的路径
	                    ext: '.js' // 合并后的扩展名
	                }]
	            }
	        },
	        // 压缩
	        uglify: {
	            mod: {
	                files: [{
	                    expand: true,
	                    cwd: 'dist/', // 需要压缩的文件夹路径
	                    src: ['**/*.js'], // 需要压缩的文件
	                    dest: 'dist/', // 压缩后存放的路径
	                    ext: '.js' // 压缩后的扩展名
	                }]
	            }
	        },
	        // 清除临时文件
	        clean: {
	            mod: ['.build'] // 需要清除的文件夹名称
	        }
	    });

	    // 所依赖的组件
	    grunt.loadNpmTasks('grunt-cmd-transport');
	    grunt.loadNpmTasks('grunt-cmd-concat');
	    grunt.loadNpmTasks('grunt-contrib-uglify');
	    grunt.loadNpmTasks('grunt-contrib-clean');
	    // 所依赖的组件

	    grunt.registerTask('default', ['transport', 'concat', 'clean']); 
	    // 创建任务，第一个参数为任务名，后续的数组中为分别要执行的任务。
	}