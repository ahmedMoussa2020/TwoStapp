import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
// import styles from "/.styles";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const id = route.params?.id;
  console.log(id)

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <Ionicons
      onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//   },

//   iconContainer: {
//     position: "absolute",
//     top: 40,
//     left: 10,
//   },
//   container: {
//     margin: 10,
//   },
//   image: {
//     width: "100%",
//     aspectRatio: 5 / 3,
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: "600",
//     marginVertical: 10,
//   },
//   subtitle: {
//     fontSize: 15,
//     color: "grey",
//   },
// });

export default RestaurantDetailsPage;
