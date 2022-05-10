import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { CommonActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {
  const renderGridIem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.dispatch(
            CommonActions.navigate({
              name: "CategoryMeals",
              params: {
                categoryId: itemData.item.id,
              },
            })
          );
          // props.navigation.navigate({
          //   routeName: "CategoryMeals",
          //   params: {
          //     categoryId: itemData.item.id,
          //   },
          // });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridIem}
      numColumns={2}
    />
  );
};

// CategoriesScreen.navigationOptions = {
//   headerTitle: "Meal Categories",
//   headerLeft: (
//     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//       <Item title="Menu" iconName="ios-menu" onPress={() => {}}></Item>
//     </HeaderButtons>
//   ),
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
