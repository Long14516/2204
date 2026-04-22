import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import Profile from './screens/Profile';
import { Updates } from './screens/Updates';
import { Order } from './screens/Order';
import { Splash } from './screens/Splash';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DetailScreen from './screens/Details';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export type RootStackParamList = { Splash: undefined; Home: undefined; Details: undefined };
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Updates}
        options={{
          tabBarIcon: ({ color, size }) => (
    <Ionicons name="bag-add-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
         <Ionicons name="notifications-outline" size={24} color="black" />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
    

   <Stack.Navigator initialRouteName="Splash">
  
  <Stack.Screen
    name="Splash"
    component={Splash}
    options={{ headerShown: false }}
  />

  <Stack.Screen
    name="Home"
    component={HomeTabs}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="Details"
    component={DetailScreen}
    options={{ headerShown: false }}
  />

</Stack.Navigator>
    </NavigationContainer>
  );
}