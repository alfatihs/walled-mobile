import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'; // Header yang sudah ada
import DashboardBody from './components/DashboardBody'; // Komponen baru

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* Tambahan tampilan sesuai desain, dengan dummy icon */}
      <DashboardBody />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
