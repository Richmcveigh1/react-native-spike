import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Home from "./Home";
import SecondPage from "./SecondPage";
import ProfilePage from "./Profile-Page";

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ProfilePage" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
