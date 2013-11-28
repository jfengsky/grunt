define("dist/mods/main2", [ "./msg/msg", "./evt\\evt" ], function(require) {
    var message = require("./msg/msg");
    new message("#J_btn");
});

define("dist/mods/msg/msg", [ "dist/mods/evt/evt" ], function(require, exports, module) {
    // var $ = require('jquery'); 
    var changeColor = require("dist/mods/evt/evt");
    function Msg(id) {
        console.log("loaded msg");
        $(id).click(function() {
            new changeColor("#J_met");
            alert("message");
        });
    }
    module.exports = Msg;
});

define("dist/mods/evt/evt", [], function(require, exports, module) {
    // var $ = require('jquery'); 
    console.log("loaded evt");
    function ChangeColor(id) {
        $(id).css("color", "#f00");
    }
    module.exports = ChangeColor;
});
