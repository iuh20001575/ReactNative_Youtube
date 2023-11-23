import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import VideoCustomize from '../video/VideoCustomize';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

const PlayingVideo = ({ video }) => {
    const route = useRoute();
    const duration = route.params?.duration ?? 0;
    const [currentDuration, setCurrentDuration] = useState(0);

    useEffect(() => {
        setInterval(() => setCurrentDuration((prev) => prev + 1), 1000);
    }, []);

    return (
        <View style={styles.videoWrapper}>
            <VideoCustomize shouldPlay video={video} />
            <View style={styles.progressBar}>
                <View style={styles.loaded} />
                <View style={[styles.viewed, { width: `${(currentDuration / duration) * 100}%` }]}>
                    <View style={styles.point} />
                </View>
            </View>
        </View>
    );
};

export default PlayingVideo;
