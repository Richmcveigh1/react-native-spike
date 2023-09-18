import { StyleSheet, View, Text, Button } from "react-native"



export default function ProfilePage( { navigation }) {

    return (
        <View style = {styles.container}>
        <Text> Profile Page </Text>
        <Button 
        title="My Books"
        onPress={() => navigation.navigate("MyBooks")} />
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        color: "red",
      flex: 1,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      borderStartWidth: 10,

      borderColor: "red",
    },
  });