import React from 'react';
import { ImageBackground, Pressable } from 'react-native';
import { MoreIcon } from '~/components/icons';
import TextCustomize from '~/components/text';
import styles from './styles';

const ShortImageItem = ({ data }) => {
    return (
        <Pressable style={styles.item}>
            <ImageBackground style={styles.wrapper} borderRadius={8} source={{ uri: data.image }}>
                <TextCustomize numberOfLines={2} fontWeight={400} size='xs' style={styles.itemTitle}>
                    {data.title}
                </TextCustomize>
                <Pressable style={styles.moreBtn}>
                    <MoreIcon fill='#fff' />
                </Pressable>
            </ImageBackground>
        </Pressable>
    );
};

export default ShortImageItem;
