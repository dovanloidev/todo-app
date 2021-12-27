import {NativeBaseProvider} from 'native-base';
import React from 'react';
import RootNavigator from './navigation';
import store from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
