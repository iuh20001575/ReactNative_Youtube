import { ResizeMode, Video } from 'expo-av';
import React from 'react';
import styles from './styles';

const VideoCustomize = ({ video, ...props }) => {
    return (
        <Video
            usePoster={video.posterUrl && Platform.OS !== 'web'}
            posterSource={{
                uri: video.posterUrl,
            }}
            posterStyle={[styles.poster]}
            resizeMode={ResizeMode.STRETCH}
            videoStyle={styles.video}
            style={styles.videoContainer}
            source={{ uri: video.videoUrl }}
            {...props}
        />
    );
};

export default VideoCustomize;
