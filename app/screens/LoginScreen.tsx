import { StyleSheet, Text, View } from 'react-native';
import { Otp } from '../components/authentification/Otp';


export function LoginScreen() {
    return (<View style={styles.container}>
      <Text>Login Screen</Text>
      <Otp />
    </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
});
