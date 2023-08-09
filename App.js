import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './Components/MainContainer';
import Search from './Components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <MainContainer/> */}
      <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
