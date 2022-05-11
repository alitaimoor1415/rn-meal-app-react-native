import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meal found. Start adding some!!!</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Favorites Screen",
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
