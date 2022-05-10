import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { CommonActions } from "@react-navigation/native";

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;
  const displayMeals = MEALS.filter(
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
