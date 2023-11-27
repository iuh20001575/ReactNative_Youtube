import {useNavigation, useRoute} from '@react-navigation/native';
import React, {memo} from 'react';
import {Pressable, View} from 'react-native';
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

const black = '#0f0f0f';

const Navigation = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={[styles.container]}>
            {navigationList.map((item) => {
                let Icon = route.name === item.name ? item.activeIcon : item.icon;

                if (route.name === 'searchResult' && item.name === 'home') Icon = HomeFocusIcon;

                return (
                    <Pressable key={uuid.v4()} style={styles.style1} onPress={() => navigation.navigate(item.name)}>
                        <View style={styles.icon}>
                            <Icon color={black} />
                        </View>
                        {!item.title || (
                            <TextCustomize numberOfLines={1} size='xxs' style={{ color: black }}>
                                {item.title}
                            </TextCustomize>
                        )}
                    </Pressable>
                );
            })}
        </View>
    );
};

export default memo(Navigation);
