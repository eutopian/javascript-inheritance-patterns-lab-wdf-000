function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x}, ${this.y}`;
}

function Side(length) {
  this.length = length
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position.x = x
  this.position.y = y
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
}

Circle.prototype.diameter = function() {
  return 2*this.radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
};

class Polygon extends Shape {
  constructor(array) {
    super();
    this.sides = array
  }
}

Polygon.prototype.perimeter = function() {
   var p = this.sides.reduce(function(prev,curr){ return curr.length + prev ;},0);
   return p
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.constructor = Quadrilateral

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.constructor = Rectangle
Rectangle.prototype.area = function(width, height) {
  return this.width * this.height;
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}

function Triangle(a, b, c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.constructor = Triangle