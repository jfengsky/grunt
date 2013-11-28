define(function(require, exports, module){
  // var $ = require('jquery'); 
  var changeColor = require('../evt/evt');
  function Msg(id){
    console.log('loaded msg');
    $(id).click(function(){
      new changeColor('#J_met');
      alert('message');
    });
  };
  module.exports = Msg;
})