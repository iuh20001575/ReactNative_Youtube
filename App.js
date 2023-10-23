import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import uuid from 'react-native-uuid';
import Home from '~/screens/home';
import Subscriptions from '~/screens/subscriptions';

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
        name: 'subscriptions',
        component: Subscriptions,
        options: {
            title: 'Subscriptions',
        },
    },
];

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='subscriptions'>
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
    );
}
