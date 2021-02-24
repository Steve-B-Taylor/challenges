let createNewMenu = (title, startTime, endTime) => {
  let menu = {
    title,
    startTime,
    endTime,
    meals: [],
    addMeal(meal) {
      this.meals.push(meal);
    },
    printMenu() {
      console.log(
        `Our ${this.title} (${this.startTime}:00 - ${this.endTime}:00)\n`
      );
      let yum = "delicious";
      let veg = "vegetarian";
      this.meals.forEach((meal) => {
        if (!meal.isDelicious()) yum = "so-so";
        if (!meal.isVegetarian()) veg = "non-vegetarian";
        console.log(`A ${yum} ${veg} ${meal.name}`);
      });
    },
  };
  return menu;
};

export default createNewMenu;
