import { StatusBar, StyleSheet, View } from "react-native";
// import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen";
import DishListItem from "./src/components/DishListItem";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import Basket from "./src/screens/Basket";
import OrderScreen from "./src/screens/OrderScreen";
import OrderDetails from "./src/screens/OrderDetails";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator />

        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
