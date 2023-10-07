import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '@/routes/RootNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PaperProvider } from 'react-native-paper';
import { store, persistor } from '@/redux/_store';
import { theme, settings } from '@/constants';
import { useFont } from '@/utils/hooks';
import Toast from 'react-native-toast-message';

const MainApp = () => {
  const { loaded, error } = useFont();
  if (!loaded) {
    return null; // explicitly return null to indicate that nothing should be rendered
  }

  if (error) {
    console.error(error);
  }

  return (
    <Provider store={store}>
      <PaperProvider settings={settings} theme={theme}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <RootNavigation />
            <Toast />
          </NavigationContainer>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default MainApp;
