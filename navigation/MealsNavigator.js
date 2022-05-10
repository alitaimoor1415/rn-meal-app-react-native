import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { Platform, Text } from "react-native";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FiltersScreen from "../screens/FiltersScreen";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { CATEGORIES, MEALS } from "../data/dummy-data";
const MealsNav = createStackNavigator();

const MealsNavigator = () => {
  return (
    <MealsNav.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 17,
        },
      }}
    >
      <MealsNav.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation, route }) => ({
          title: "Meals Categories",
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "open-sans-bold",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                // I CALLED IT HERE ----->>>>>
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <MealsNav.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => {
          const catId = route.params.categoryId;
          const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

          return {
            title: selectedCategory.title,
          };
        }}
      />
      <MealsNav.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => {
          const toggleFav = route.params.toggleFav;
          const isFavorite = route.params.isFav;

          return {
            title: route.params.mealTitle,
            headerBackTitleStyle: {
              fontFamily: "open-sans",
            },
            headerTitleStyle: {
              fontSize: 17,
              fontFamily: "open-sans-bold",
            },
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName={isFavorite ? "ios-star" : "ios-star-outline"}
                  onPress={toggleFav}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </MealsNav.Navigator>
  );
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const getNavigationOptions = () => {
  if (Platform.OS === "ios") {
    // Props for the ios navigator
    return {
      labeled: false,
      initialRouteName: "Meals",

      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "black",
        labelStyle: {
          fontFamily: "open sans",
          // fontSize: 22,
        },
      },
    };
  }
  // Props for android
  return {
    initialRouteName: "Favorites",
    activeColor: "tomato",
    inactiveColor: "black",
    barStyle: { backgroundColor: Colors.primaryColor },
    shifting: true,
  };
};
const MealsTabNav = () => {
  return (
    <MealsFavTabNavigator.Navigator {...getNavigationOptions()}>
      <MealsFavTabNavigator.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "open-sans-bold",
          },
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
            ) : (
              "Meals"
            ),
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <MealsFavTabNavigator.Screen
        name="Favorites"
        component={FavoritesNav}
        options={{
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "open-sans-bold",
          },
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
            ) : (
              "Favorites"
            ),
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-star"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
    </MealsFavTabNavigator.Navigator>
  );
};

const FavoritesStack = createStackNavigator();

const FavoritesNav = () => {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
        headerTitleStyle: {
          fontSize: 17,
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <FavoritesStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation, route }) => ({
          title: "Your Favorites",
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "open-sans-bold",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                // I CALLED IT HERE ----->>>>>
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <FavoritesStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => {
          const mealId = route.params.mealId;
          const selectedMeal = MEALS.find((meal) => meal.id === mealId);

          return {
            title: selectedMeal.title,
          };
        }}
      />
    </FavoritesStack.Navigator>
  );
};

const FilterNav = createStackNavigator();

const FiltersNavigator = () => {
  return (
    <FilterNav.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 17,
        },
      }}
    >
      <FilterNav.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation, route }) => ({
          title: "Filters",
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "open-sans-bold",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                // I CALLED IT HERE ----->>>>>
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName="ios-save"
                // I CALLED IT HERE ----->>>>>
                onPress={() =>
                  // navigation.getParam("save")
                  // console.log("faddfa")
                  {
                    route.params;
                    console.log(route.params);
                  }
                }
              />
            </HeaderButtons>
          ),
        })}
      />
    </FilterNav.Navigator>
  );
};
const mainNavigator = createDrawerNavigator();
const MainNavigatorDrawer = () => {
  return (
    <NavigationContainer>
      <mainNavigator.Navigator>
        <mainNavigator.Screen name="MealsFav" component={MealsTabNav} />
        <mainNavigator.Screen name="Filters" component={FiltersNavigator} />
      </mainNavigator.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigatorDrawer;
// export default MealsTabNav;
