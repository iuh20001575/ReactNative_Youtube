import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextCustomize from '~/components/text';
import {
    AddCircleIcon,
    HomeFocusIcon,
    HomeIcon,
    LibraryFocusIcon,
    LibraryIcon,
    ShortFocusIcon,
    ShortIcon,
    SubcriptionFocusIcon,
    SubcriptionIcon,
    SubscriptionFocusIcon,
    SubscriptionIcon,
} from '../../../components/icons/icons';
import uuid from 'react-native-uuid';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const navigations = [
    {
        name: 'home',
        title: 'Home',
        icon: HomeIcon,
        activeIcon: HomeFocusIcon,
    },
    {
        name: 'shorts',
        title: 'Shorts',
        icon: ShortIcon,
        activeIcon: ShortFocusIcon,
    },
    {
        name: 'add',
        title: '',
        icon: AddCircleIcon,
        activeIcon: AddCircleIcon,
    },
    {
        name: 'subscriptions',
        title: 'Subscriptions',
        icon: SubscriptionIcon,
        activeIcon: SubscriptionFocusIcon,
    },
    {
        name: 'library',
        title: 'Library',
        icon: LibraryIcon,
        activeIcon: LibraryFocusIcon,
    },
];

const white = '#fff';
const black = '#0f0f0f';

const Navigation = ({}) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const route = useRoute();
    const isShorts = route.name === 'shorts';

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom + 5 }, isShorts && { backgroundColor: black }]}>
            {navigations.map((item) => {
                const Icon = route.name === item.name ? item.activeIcon : item.icon;

                return (
                    <Pressable key={uuid.v4()} style={styles.style1} onPress={() => navigation.navigate(item.name)}>
                        <Icon color={isShorts ? white : black} />
                        {!item.title || (
                            <TextCustomize style={{ color: isShorts ? white : black }}>{item.title}</TextCustomize>
                        )}
                    </Pressable>
                );
            })}
        </View>
    );
};

export default Navigation;
