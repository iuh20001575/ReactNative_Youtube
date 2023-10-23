import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import uuid from 'react-native-uuid';
import Home from '~/screens/home';
import Short from '~/screens/shorts';
import Add from './src/screens/add/Add';
import Subcription from './src/screens/subscription/Subscription';
import Library from './src/screens/library/Library';
import Subscription from './src/screens/subscription/Subscription';

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
        name: 'subscription',
        component: Subscription,
        options: {
            title: 'Subscription',
        },
    },
    {
        name: 'library',
        component: Library,
        options: {
            title: 'Library',
        },
    },
];

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home'>
                {screens.map((screen) => (
                    <Stack.Screen
                        key={uuid.v4()}
                        name={screen.name}
                        component={screen.component}
                        options={{ headerShown: false, ...screen.options }}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
