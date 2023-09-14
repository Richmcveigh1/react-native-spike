import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondPage from "./Components/SecondPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <View style={styles.container}> */}
          <Stack.Screen
            name="Home"
            component={Home}
            
          />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          {/* <StatusBar style="auto" /> */}
        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
