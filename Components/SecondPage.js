import { Text, Image, StyleSheet, View, Button } from "react-native"; 


export default function SecondPage({ navigation }) {
    const user = {
        username: "Mr Biscuits", 
        Age: 4,
        img_url: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg'
      }
      const styles = StyleSheet.create({
        logo: {
            width: 100,
            height: 100,
          }
      })
    return (
        <View style={styles.logo}>
        <Text>This is our second page</Text>
        <Text>{user.username}</Text>
        <Button 
        title="in 2 deep"
        onPress={() => navigation.navigate("ThirdPage")} />
        <Image style={styles.logo} source={{uri: user.img_url}}/>
        </View>
    )
}