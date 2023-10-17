import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { CastIcon, LogoIcon, NotificationIcon, SearchIcon, YouTubeIcon } from '~/components/icons';
import styles from './styles';

const Header = () => {
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
                <Pressable>
                    <SearchIcon />
                </Pressable>
                <Pressable>
                    <Image
                        style={styles.avatar}
                        source={require('../../../../assets/373558389_724463569726207_155636590546417458_n.jpg')}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default Header;
