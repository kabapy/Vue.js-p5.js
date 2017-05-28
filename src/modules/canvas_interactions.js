const canvas_interactions = function(sketch) {

  this.p5 = sketch;
  this.objs = window.store.objs; // store
  this.store = window.store;
}

// draw loop
canvas_interactions.prototype.draw = function() {
  var p5 = this.p5;
  var item;
  switch (this.store.brushColor) {
    case "red":
      p5.fill(255, 0, 0)
      break;
    case "blue":
      p5.fill(0, 0, 255)
      break;
    case "green":
      p5.fill(0, 255, 0)
      break;
  }
  p5.noStroke();
  for (var i = 0; i < this.objs.length; i++) {
    item = this.objs[i];
    p5.ellipse(item.x, item.y, 10, 10);
  }
}

canvas_interactions.prototype.canvasClick = function(x, y) {
  var p5 = this.p5;

  if (this.outsideBoundaries(x, y)) {
    return false; // check if click is outside canvas boundaries
  }
  this.objs.push(p5.createVector(x, y));
}

canvas_interactions.prototype.canvasDrag = function(x, y) {
  var p5 = this.p5;
}

canvas_interactions.prototype.canvasReleased = function(x, y) {
  var p5 = this.p5;

}
canvas_interactions.prototype.outsideBoundaries = function(x, y) {
  var p5 = this.p5;
  return (x < 0 || y < 0 || x > p5.width || y > p5.height);
}

// export module
export default canvas_interactions;
