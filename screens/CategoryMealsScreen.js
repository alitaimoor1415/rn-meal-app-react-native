import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { View, Text, StyleSheet } from "react-native";
const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryId.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found. May be check your filters!</Text>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
