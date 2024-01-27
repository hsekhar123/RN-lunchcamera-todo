import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigation from './app/component/MainNavigation';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './app/redux/store';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainNavigation />
      </SafeAreaView>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
