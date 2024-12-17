import { StyleSheet } from 'react-native';
import Login from './login';
import TopUp from './(home)/topup';

export default function App() {
  return (
    // <TopUp></TopUp>
    <Login />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: '800',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingTop: 100,
    padding: 35,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  button: {
    margin: 10,
    backgroundColor: '#4DB6AC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    // height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    color: "#fff",
    // fontSize: 16,
  },
  iconImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
