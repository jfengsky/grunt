define(function(require, exports, module){
  // var $ = require('jquery'); 
  function Leb(id){
    console.log('loaded leb');
    $(id).text('abc');
    
  };


  module.exports = Leb;
})