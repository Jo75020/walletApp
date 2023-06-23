import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IsLoggedIn } from "../services/ManageAuth";

export function HomeScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    IsLoggedIn().then((currentUser) => {
      if (currentUser) {
        navigation.navigate("Wallet");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {
        loading ? <Text>Loading...</Text> :
        <View>
          <Text>Home Screen</Text>
          <Button title="Login" onPress={() => navigation.navigate("Login")} />
        </View>
      }
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
