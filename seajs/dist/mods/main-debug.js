define("dist/mods/main-debug", [ "./leb/leb-debug", "./color/color-debug" ], function(require) {
    var lebs = require("./leb/leb-debug");
    var txt = new lebs("#J_text");
    require("./color/color-debug");
});

define("dist/mods/leb/leb-debug", [], function(require, exports, module) {
    // var $ = require('jquery'); 
    function Leb(id) {
        console.log("loaded leb");
        $(id).text("abc");
    }
    module.exports = Leb;
});

define("dist/mods/color/color-debug", [], function(require, exports, module) {
    console.log("loaded color");
    $("#J_text").css("color", "#f60");
});
