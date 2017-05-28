import canvas_interactions from './canvas_interactions.js';

var p5 = require("p5");
var myp5 = new p5(function(sketch) {

  window.store = {}; // to communicate between vuejs and p5js
  window.store.objs = []; // list of all objects on canvas


  var CI = {}; // canvas interactions

  // ************************** setup **************************
  sketch.setup = function() {
    var cnv = sketch.createCanvas(500, 500);
    CI = new canvas_interactions(sketch);

    // set canvas
    sketch.background(51); //color
  };

  // ******************************* draw loop *****************
  sketch.draw = function() {
    sketch.background(51);
    CI.draw();
  };


  // ******************* canvas mouse events ********************************
  // mouse event
  sketch.mousePressed = function(mouseButton) {
    CI.canvasClick(sketch.mouseX, sketch.mouseY);
  }

  sketch.mouseDragged = function() {
    CI.canvasDrag(sketch.mouseX, sketch.mouseY);
    // prevent default
    return false;
  }

  sketch.mouseReleased = function() {
    CI.canvasReleased(sketch.mouseX, sketch.mouseY);
  }

}, 'canvas_container');
