###grunt学习和使用


######1.全局安装grunt
<pre>
npm install -g grunt-cli
</pre>

######2.配置package.json
进入项目目录，新建
<pre>
{
  "name": "gruntdemo",                // 项目名
  "version": "0.1.0",                 // 版本号
  "devDependencies": {
    "grunt": "~0.4.0",                 // 依赖插件配置
    "grunt-contrib-jshint": "~0.1.1",  // js语法检查
    "grunt-contrib-uglify": "~0.1.2",  // 采用UglifyJS压缩js
    "grunt-contrib-concat": "~0.1.1"   // 合并文件
  }
}
</pre>
然后在命令行下输入：
<pre>
npm install // 安装package.json配置的插件
</pre>

######3.创建Gruntfile.js，基本配置如下
<pre>
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
</pre>

######4.运行grunt
命令行下输入:
<pre>
grunt
</pre>