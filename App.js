import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import DemoStackNavigator from './routes/DemoStackNavigator'
import {PaperProvider} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import DemoDrawerNavigator from './routes/DemoDrawerNavigator';
import DemoTabNavigator from './routes/DemoTabNavigator';

export default function App() {
  return (

       <NavigationContainer>

          <PaperProvider>
            {/* <DemoStackNavigator></DemoStackNavigator> */}
            {/* <DemoDrawerNavigator></DemoDrawerNavigator> */}
            <DemoTabNavigator></DemoTabNavigator>
          </PaperProvider>

        </NavigationContainer>

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
