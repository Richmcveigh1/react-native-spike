
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./Components/Home-Stack";
import ProfileStack from "./Components/Profile-Stack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
         
          <Tab.Screen name="Topic 1" component={HomeStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}


