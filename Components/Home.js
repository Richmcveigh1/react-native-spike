import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Spike it baby</Text>
      <Button
        title="Go to 2nd page"
        onPress={() => navigation.navigate("SecondPage")}
      />
      <Button
        onPress={() => Alert.alert("OMG it's all gone horribly wrong")}
        title="Alert"
        color="#841584"
        accessibilityLabel="Alert button"
      />
      <Button
        title="in 2 deep"
        onPress={() => navigation.navigate("ThirdPage")}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
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
