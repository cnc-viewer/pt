// Generated by CoffeeScript 1.3.1
( function() {
  var corner, form, mouseP, p, pts, space, _i;

  space = new CanvasSpace("point-quadrant-demo", '2d', '#e3e5e9').display();

  form = new Form(space.ctx);

  pts = [];

  for (p = _i = 0; _i < 300; p = _i += 1) {
    pts.push(new Vector(20 + (space.size.x - 40) * Math.random(), 20 + (space.size.y - 40) * Math.random()));
  }

  mouseP = new Vector();

  corner = function(p, quadrant, size) {
    if (size == null) {
      size = 5;
    }
    switch (quadrant) {
      case Const.top_left:
        return new Line(p).connect(p.$add(size, size));
      case Const.top_right:
        return new Line(p).connect(p.$add(-size, size));
      case Const.bottom_left:
        return new Line(p).connect(p.$add(size, -size));
      case Const.bottom_right:
        return new Line(p).connect(p.$add(-size, -size));
      case Const.top:
        return new Line(p).connect(p.$add(0, size));
      case Const.bottom:
        return new Line(p).connect(p.$add(0, -size));
      case Const.left:
        return new Line(p).connect(p.$add(size, 0));
      default:
        return new Line(p).connect(p.$add(-size, 0));
    }
  };

  space.add({
    animate: function(time, fps, context) {
      var p, _j, _len, _results;
      form.fill("#eb4035");
      form.stroked = false;
      form.point(mouseP, 5);
      _results = [];
      for (_j = 0, _len = pts.length; _j < _len; _j++) {
        p = pts[_j];
        form.fill("#272b2f");
        form.stroked = false;
        form.point(p, 1);
        form.stroke("#272b2f", 0.5);
        form.stroked = true;
        _results.push(form.line(corner(p, mouseP.quadrant(p, 2), 8)));
      }
      return _results;
    },
    onMouseAction: function(type, x, y, evt) {
      if (type === "move") {
        return mouseP.set(x, y);
      }
    }
  });

  space.bindMouse();

  space.play();

})();