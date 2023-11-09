import React from 'react';
import { Image, Pressable, View } from 'react-native';
import TextCustomize from '~/components/text';
import styles from './styles';

const statusColor = {
    live: '#f00',
    online: 'rgba(6, 95, 212, 1)',
};

const SubscriptionChannel = ({ data }) => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.header}>
                <Image resizeMode='cover' style={styles.avatar} source={{ uri: data.avatar }} />
                {data.status !== 'offline' && (
                    <View style={[styles.status, { backgroundColor: statusColor[data.status] }]} />
                )}
            </View>
            <TextCustomize size='xs' numberOfLines={1} style={styles.name}>
                {data.name}
            </TextCustomize>
        </Pressable>
    );
};

export default SubscriptionChannel;
