import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import uuid from 'react-native-uuid';
import Home from '~/screens/home';

const Stack = createNativeStackNavigator();

const screens = [
    {
        name: 'home',
        component: Home,
        options: {
            title: 'YouTube',
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
