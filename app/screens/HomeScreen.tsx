import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Otp from "../components/authentification/Otp";


export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
