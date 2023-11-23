import React from 'react';
import { Image, Pressable } from 'react-native';
import styles from './styles';

const Avatar = ({ source, size = 24, styleBtn = {}, style = {}, onPress = () => {} }) => {
    return (
        <Pressable style={styleBtn} onPress={onPress}>
            <Image source={source} style={[style, styles.avatar, { width: size, height: size }]} />
        </Pressable>
    );
};

export default Avatar;
