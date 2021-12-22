import {NativeBaseProvider} from 'native-base';
import React from 'react';
import RootNavigator from './navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
};

export default App;
