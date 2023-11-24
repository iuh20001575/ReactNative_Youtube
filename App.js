import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import uuid from 'react-native-uuid';
import Add from '~/screens/add';
import DetailVideo from '~/screens/detailVideo';
import Home from '~/screens/home';
import Library from '~/screens/library';
import Search from '~/screens/search';
import Short from '~/screens/shorts';
import Subscriptions from '~/screens/subscriptions';
import { ThemeProvider } from './src/context/themeContext';
import Account from './src/screens/account/Account';

const Stack = createNativeStackNavigator();

const screens = [
    {
        name: 'home',
        component: Home,
        options: {
            title: 'YouTube',
        },
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
    },
    {
        name: 'search',
        component: Search,
        options: {
            title: 'Search',
        },
    },
    {
        name: 'detail-video',
        component: DetailVideo,
        options: {
            title: 'Detail video',
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
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='home'>
                    {screens.map((screen) => (
                        <Stack.Screen
                            initialParams={{ filter: 'All' }}
                            key={uuid.v4()}
                            name={screen.name}
                            component={screen.component}
                            options={{ headerShown: false, ...screen.options }}
                        />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
