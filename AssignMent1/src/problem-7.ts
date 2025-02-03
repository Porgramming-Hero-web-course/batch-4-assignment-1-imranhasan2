{
  // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      const currentDate = new Date().getFullYear();
      const carAge = currentDate - this.year;
      return carAge;
    }
  }

  const car = new Car("Honda", "Civic", 2010);

  console.log(car.getCarAge());
}
