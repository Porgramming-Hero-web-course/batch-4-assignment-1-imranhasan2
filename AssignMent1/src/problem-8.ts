{
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }

  // const user = { name: "Imran", age: 25, country: "Bangladesh" };

  // console.log(validateKeys(user, ["name", "age"]));
  // console.log(validateKeys(user, ["name", "email"]));
}
