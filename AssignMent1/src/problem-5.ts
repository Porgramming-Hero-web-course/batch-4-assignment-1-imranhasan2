{
  // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  function getProperty<T, Y extends keyof T>(obj: T, pro: Y): T[Y] {
    return obj[pro];
  }

  // console.log(
  //   getProperty({ name: "imran", age: 25, gender: "male" }, "gender")
  // );
}
