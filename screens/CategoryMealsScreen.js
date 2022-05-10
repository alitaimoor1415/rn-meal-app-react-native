import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryId.indexOf(catId) >= 0
  );

  // console.log(displayMeals);

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
