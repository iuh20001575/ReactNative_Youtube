import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Platform, Pressable, View } from 'react-native';
import TextCustomize from '~/components/text';
import VideoCustomize from '~/components/video';
import { formatRelativeTime, formatTimeVideo, formatView } from '~/utils';
import { MoreIcon } from '../icons';
import styles from './styles';

const VideoItem = ({ video }) => {
    const [duration, setDuration] = useState(0);
    const navigation = useNavigation();

    const handleClick = () =>
        navigation.navigate('detail-video', {
            video,
            duration,
        });

    return (
        <Pressable onPress={handleClick}>
            <View style={styles.videoWrapper}>
                <VideoCustomize
                    video={video}
                    onLoad={(e) => {
                        setDuration(Math.floor(Platform.OS === 'web' ? e.target.duration : e.durationMillis / 1000));
                    }}
                />
                <View style={styles.durationView}>
                    <TextCustomize size='xs' style={styles.duration}>
                        {formatTimeVideo(duration)}
                    </TextCustomize>
                </View>
            </View>
            <View style={styles.body}>
                <Pressable style={styles.avatarBtn}>
                    <Image
                        resizeMode='cover'
                        style={styles.avatarImage}
                        source={{
                            uri: video.avatar,
                        }}
                    />
                </Pressable>
                <View style={styles.info}>
                    <TextCustomize size='md' style={styles.title}>
                        {video.title}
                    </TextCustomize>
                    <TextCustomize numberOfLines={2} size='xs' style={styles.desc}>
                        {video.channelName} · {formatView(video.views)} · {formatRelativeTime(new Date(video.date))}{' '}
                    </TextCustomize>
                </View>
                <Pressable onPress={() => console.log('More')} style={styles.moreBtn}>
                    <MoreIcon />
                </Pressable>
            </View>
        </Pressable>
    );
};

export default VideoItem;
