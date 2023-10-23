import { ResizeMode, Video } from 'expo-av';
import React, { useState } from 'react';
import { Image, Platform, Pressable, View } from 'react-native';
import TextCustomize from '~/components/text';
import { formatRelativeTime, formatTimeVideo, formatView } from '~/utils';
import { MoreIcon } from '../icons';
import styles from './styles';

const VideoItem = ({ video }) => {
    const [duration, setDuration] = useState(0);

    return (
        <Pressable>
            <View style={styles.video}>
                <Video
                    usePoster={video.posterUrl && Platform.OS !== 'web'}
                    posterSource={{
                        uri: video.posterUrl,
                    }}
                    posterStyle={[styles.poster]}
                    onLoad={(e) => {
                        setDuration(Math.floor(Platform.OS === 'web' ? e.target.duration : e.durationMillis / 1000));
                    }}
                    resizeMode={ResizeMode.STRETCH}
                    videoStyle={{ flex: 1, width: '100%', height: '100%' }}
                    style={{ flex: 1, width: '100%' }}
                    source={{ uri: video.videoUrl }}
                />
                <TextCustomize size='xs' style={styles.duration}>
                    {formatTimeVideo(duration)}
                </TextCustomize>
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
                    <TextCustomize size='xs' style={styles.desc}>
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
