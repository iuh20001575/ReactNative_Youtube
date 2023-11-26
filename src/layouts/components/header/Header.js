import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Image, Pressable, View } from 'react-native';
import { CastIcon, LogoIcon, NotificationIcon, SearchIcon, YouTubeIcon } from '~/components/icons';
import styles from './styles';

const Header = () => {
    const navigation = useNavigation();

    const handleClickSearchBtn = () => navigation.navigate('search');
    const handleClickAvatar = () => navigation.navigate('account');

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <LogoIcon />
                <YouTubeIcon />
            </View>
            <View style={styles.actions}>
                <Pressable>
                    <CastIcon />
                </Pressable>
                <Pressable>
                    <NotificationIcon />
                </Pressable>
                <Pressable onPress={handleClickSearchBtn}>
                    <SearchIcon />
                </Pressable>
                <Pressable onPress={handleClickAvatar}>
                    <Image style={styles.avatar} source={require('../../../../assets/avatar.jpg')} />
                </Pressable>
            </View>
        </View>
    );
};

export default memo(Header);
