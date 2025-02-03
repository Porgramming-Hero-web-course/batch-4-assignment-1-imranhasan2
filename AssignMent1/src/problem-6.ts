{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(obj: Profile, update: Partial<Profile>) {
    return { ...obj, ...update };
  }
  // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(updateProfile(myProfile, { age: 26 }));
}
