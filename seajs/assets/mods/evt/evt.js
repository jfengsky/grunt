define(function(require, exports, module){
  // var $ = require('jquery'); 
  console.log('loaded evt');
  function ChangeColor(id){
    $(id).css('color', '#f00');
  };


  module.exports = ChangeColor;
})