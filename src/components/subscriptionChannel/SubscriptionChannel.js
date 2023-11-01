import React from 'react';
import { Image, Pressable, View } from 'react-native';
import TextCustomize from '~/components/text';
import styles from './styles';

const SubscriptionChannel = ({ data }) => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.header}>
                <Image resizeMode='cover' style={styles.avatar} source={data.avatar} />
                <View />
            </View>
            <TextCustomize size='xs' numberOfLines={1} style={styles.name}>
                {data.name}
            </TextCustomize>
        </Pressable>
    );
};

export default SubscriptionChannel;
