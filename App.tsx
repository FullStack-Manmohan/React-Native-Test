// @ts-ignore
import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './App/Navigator/ScreenNavigation';
import store from './App/Store';
const App = () => {
    return (
        <Provider
            store={store}
        >
            <AppNavigator />
        </Provider>

    );
};

export default App;
