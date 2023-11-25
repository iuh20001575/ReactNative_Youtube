import { ResizeMode, Video } from 'expo-av';
import React from 'react';
import Poster from './Poster';
import styles from './styles';

const VideoCustomize = ({ video, videoRef, ...props }) => {
    return (
        <Video
            PosterComponent={Poster}
            usePoster={video.posterUrl}
            posterSource={video.posterUrl}
            posterStyle={[styles.poster]}
            resizeMode={ResizeMode.STRETCH}
            videoStyle={styles.video}
            style={styles.videoContainer}
            source={video.videoUrl}
            {...props}
            ref={videoRef}
        />
    );
};

export default VideoCustomize;
