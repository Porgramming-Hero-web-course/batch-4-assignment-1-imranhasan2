{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type shape = Circle | Rectangle;

  function calculateShapeArea(shape: shape): number {
    if (shape.shape == "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.shape == "rectangle") {
      return shape.height * shape.width;
    } else {
      throw new Error("shape type must be circle or rectangle");
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);
}
