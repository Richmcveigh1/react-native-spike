import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyBooks from "./MyBooks";
import ProfilePage from "./Profile-Page";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile Main" component={ProfilePage} />
      <Stack.Screen name="My Booky Wook" component={MyBooks} />
    </Stack.Navigator>
  );
}
