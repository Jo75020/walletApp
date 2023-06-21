import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Web3 from 'web3';

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/b19e871032b943bb988d4920d62c875a')
);

web3.eth.getBlockNumber().then( blockNumber => {
  console.log('lastBlock', blockNumber);
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
