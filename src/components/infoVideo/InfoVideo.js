import { View, Text, Pressable } from 'react-native';
import React, { memo } from 'react';
import styles from './styles';
import TextCustomize from '../text/TextCustomize';
import { formatRelativeTime, formatView } from '../../utils';

const InfoVideo = ({ video }) => {
    return (
        <View style={styles.info}>
            <TextCustomize numberOfLines={2} fontWeight={500} size='lg'>
                {video.title}
            </TextCustomize>
            <View style={styles.description}>
                <TextCustomize size='xs' ellipsizeMode='clip' numberOfLines={1} style={styles.desc}>
                    {formatView(video.views)} {formatRelativeTime(new Date(video.date))}
                </TextCustomize>
                <Pressable>
                    <TextCustomize fontWeight={500} size='xs'>
                        ...more
                    </TextCustomize>
                </Pressable>
            </View>
        </View>
    );
};

export default memo(InfoVideo);
