import React from 'react';
import { Image, View } from 'react-native';
import { formatTimeVideo } from '../../utils';
import { VideoInfo } from '../icons/icons';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const HistoryItem = ({ data }) => {
    return (
        <View style={styles.historyVideo}>
            <View style={styles.wrapper}>
                <Image style={styles.historyImage} source={{ uri: data.posterUrl }}></Image>
                <View style={styles.progress}>
                    <View style={[styles.position, { width: `${(data.position / data.duration) * 100}%` }]} />
                </View>
                <View style={styles.duration}>
                    <TextCustomize fontWeight={500} size='xs' style={styles.durationText}>
                        {formatTimeVideo(data.duration)}
                    </TextCustomize>
                </View>
            </View>
            <View style={styles.historyVideoTitle}>
                <View style={styles.videoTitle}>
                    <TextCustomize size='sm' numberOfLines={2} style={styles.title}>
                        {data.title}
                    </TextCustomize>
                    <TextCustomize size='xs' numberOfLines={1} style={styles.desc}>
                        {data.channelName}
                    </TextCustomize>
                </View>
                <View style={styles.moreBtn}>
                    <VideoInfo />
                </View>
            </View>
        </View>
    );
};

export default HistoryItem;
