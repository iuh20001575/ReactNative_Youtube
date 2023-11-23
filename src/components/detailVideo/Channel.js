import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { formatView } from '../../utils';
import { DownArrowIcon, NotificationIcon } from '../icons';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';
import { useMemo } from 'react';

export default function Channel({ selectedVideo }) {
    const subscriptionNumber = useMemo(() => Math.random() * 10000000, [selectedVideo]);

    return (
        <View style={styles.channelWrapper}>
            <View style={styles.channel}>
                <Image source={selectedVideo.avatar} style={styles.avatar} />
                <View style={styles.channelInfo}>
                    <TextCustomize fontWeight={500} size='sm'>
                        {selectedVideo.channelName}
                    </TextCustomize>
                    <TextCustomize size='xs' style={styles.textSecondary}>
                        {formatView(subscriptionNumber, false)}
                    </TextCustomize>
                </View>
            </View>
            <Pressable style={styles.subscriptionBtn}>
                <NotificationIcon />
                <DownArrowIcon />
            </Pressable>
        </View>
    );
}
