import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { formatView } from '../../utils';
import Avatar from '../avatar/Avatar';
import { DownArrowIcon, NotificationIcon } from '../icons';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

export default function Channel({ selectedVideo }) {
    const subscriptionNumber = useMemo(() => Math.random() * 10000000, [selectedVideo]);

    return (
        <View style={styles.channelWrapper}>
            <View style={styles.channel}>
                <Avatar size={32} source={selectedVideo.avatar} />
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
