let createNewMeal = (name, ingredients) => {
  let mealItem = {
    name,
    ingredients,
    isVegetarian() {
      return !this.ingredients.some(
        (ingredient) => ingredient.category === "meat"
      );
    },
    isDelicious() {
      return this.ingredients.some(
        (ingredient) => ingredient.category === "cheese"
      );
    },
  };
  return mealItem;
};

export default createNewMeal;
