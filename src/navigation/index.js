import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsPage from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import Basket from "../screens/Basket";
import OrderScreen from "../screens/OrderScreen";
import OrderDetails from "../screens/OrderDetails";
// import DishListItem from "../screens/DishListItem";

import { Foundation, FontAwesome5 } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
    )
} 

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen name='Home' component={HomeStackNavigation} options={{
                tabBarIcon: ({ color }) => (
                    <Foundation name='home' size={24} color={color} />
                )
            }}
            />
            <Tab.Screen name='Orders' component={OrderStackNavigation }
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="receipt" size={24} color="black" />
                    )
                }} />
            <Tab.Screen name='Profile' component={OrderScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name='user-alt' size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Restaurants' component={HomeScreen} />
            <HomeStack.Screen name='Restaurant' component={RestaurantDetailsPage} />
            <HomeStack.Screen name='Dish' component={DishDetailsScreen} />
            <HomeStack.Screen name='Basket' component={Basket} />
        </HomeStack.Navigator>
    )
}

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigation = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name='Orders' component={OrderScreen} />
            <OrdersStack.Screen name='Order' component={OrderDetails} />
        </OrdersStack.Navigator>
    )
}


export default RootNavigator;