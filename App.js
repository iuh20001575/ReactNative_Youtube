import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import { Provider } from 'react-redux';
import Add from '~/screens/add';
import Home from '~/screens/home';
import Library from '~/screens/library';
import Search from '~/screens/search';
import Short from '~/screens/shorts';
import Subscriptions from '~/screens/subscriptions';
import { store } from './src/app/store';
import SearchResult from './src/screens/searchResult/SearchResult';
import Account from './src/screens/account/Account';

const Stack = createNativeStackNavigator();

const screens = [
    {
        name: 'home',
        component: Home,
        options: {
            title: 'YouTube',
        },
        initialParams: { filter: 'All' },
    },
    {
        name: 'shorts',
        component: Short,
        options: {
            title: 'Shorts',
        },
    },
    {
        name: 'add',
        component: Add,
        options: {
            title: 'Add',
        },
    },
    {
        name: 'library',
        component: Library,
        options: {
            title: 'Library',
        },
    },
    {
        name: 'subscriptions',
        component: Subscriptions,
        options: {
            title: 'Subscriptions',
        },
        initialParams: { filter: 'All' },
    },
    {
        name: 'search',
        component: Search,
        options: {
            title: 'Search',
        },
    },
    {
        name: 'searchResult',
        component: SearchResult,
        options: {
            title: 'Search Result',
        },
    },
    {
        name: 'account',
        component: Account,
        options: {
            title: 'Account',
        },
    },
    {
        name: 'account',
        component: Account,
        options: {
            title: 'Account',
        },
    },
];

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
                            {screens.map((screen) => (
                                <Stack.Screen key={uuid.v4()} {...screen} />
                            ))}
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}
