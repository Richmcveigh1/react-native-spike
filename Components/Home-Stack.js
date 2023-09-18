import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import SecondPage from "./SecondPage";
import ThirdPage from "./3rd-nested-page";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}
