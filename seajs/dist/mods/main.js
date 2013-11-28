define("dist/mods/main", [ "./leb/leb", "./color/color" ], function(require) {
    var lebs = require("./leb/leb");
    var txt = new lebs("#J_text");
    require("./color/color");
});

define("dist/mods/leb/leb", [], function(require, exports, module) {
    // var $ = require('jquery'); 
    function Leb(id) {
        console.log("loaded leb");
        $(id).text("abc");
    }
    module.exports = Leb;
});

define("dist/mods/color/color", [], function(require, exports, module) {
    console.log("loaded color");
    $("#J_text").css("color", "#f60");
});
