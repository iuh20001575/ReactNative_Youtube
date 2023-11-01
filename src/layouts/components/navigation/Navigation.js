import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable, View } from 'react-native';
import uuid from 'react-native-uuid';
import TextCustomize from '~/components/text';
import {
    AddCircleIcon,
    HomeFocusIcon,
    HomeIcon,
    LibraryFocusIcon,
    LibraryIcon,
    ShortFocusIcon,
    ShortIcon,
    SubscriptionFocusIcon,
    SubscriptionIcon,
} from '../../../components/icons/icons';
import useTheme from '../../../context/themeContext';
import styles from './styles';

const navigationList = [
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
    const route = useRoute();
    const { dark } = useTheme();

    return (
        <View
            style={[styles.container, dark && { backgroundColor: black, borderTopColor: 'rgba(255, 255, 255, 0.1)' }]}
        >
            {navigationList.map((item) => {
                const Icon = route.name === item.name ? item.activeIcon : item.icon;

                return (
                    <Pressable key={uuid.v4()} style={styles.style1} onPress={() => navigation.navigate(item.name)}>
                        <View style={styles.icon}>
                            <Icon color={dark ? white : black} />
                        </View>
                        {!item.title || (
                            <TextCustomize numberOfLines={1} size='xxs' style={{ color: dark ? white : black }}>
                                {item.title}
                            </TextCustomize>
                        )}
                    </Pressable>
                );
            })}
        </View>
    );
};

export default Navigation;
