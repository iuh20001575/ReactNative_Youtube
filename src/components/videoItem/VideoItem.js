import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { useDispatch } from 'react-redux';
import TextCustomize from '~/components/text';
import { formatRelativeTime, formatTimeVideo, formatView } from '~/utils';
import { addVideo } from '../../features/playingVideoSlice';
import Avatar from '../avatar/Avatar';
import { MoreIcon } from '../icons';
import styles from './styles';

const VideoItem = ({ video }) => {
    const dispatch = useDispatch();

    const handleClick = () => dispatch(addVideo(video));

    return (
        <Pressable onPress={handleClick}>
            <View style={styles.videoWrapper}>
                <Image resizeMode='cover' style={styles.posterImage} source={video.posterUrl} />
                <View style={styles.durationView}>
                    <TextCustomize size='xs' style={styles.duration}>
                        {formatTimeVideo(video.duration)}
                    </TextCustomize>
                </View>
            </View>
            <View style={styles.body}>
                <Avatar source={video.avatar} size={28} />
                <View style={styles.info}>
                    <TextCustomize size='md' style={styles.title}>
                        {video.title}
                    </TextCustomize>
                    <TextCustomize numberOfLines={2} size='xs' style={styles.desc}>
                        {video.channelName} · {formatView(video.views)} · {formatRelativeTime(new Date(video.date))}{' '}
                    </TextCustomize>
                </View>
                <Pressable>
                    <MoreIcon />
                </Pressable>
            </View>
        </Pressable>
    );
};

export default VideoItem;
