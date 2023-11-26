import React from 'react';
import { Image, View } from 'react-native';
import { PlaylistWhiteIcon, VideoInfo } from '../icons';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const Playlist = ({ data }) => {
    return (
        <View style={styles.historyVideo}>
            <View style={styles.playlistVideo}>
                <Image style={styles.historyImage} source={{ uri: data.image }}></Image>
                <View style={styles.numberVideoPlaylist}>
                    <PlaylistWhiteIcon />
                    <TextCustomize size='xs' style={styles.playlistNumber}>
                        {data?.videos?.length ?? '0'}
                    </TextCustomize>
                </View>
            </View>
            <View style={styles.historyVideoTitle}>
                <View style={styles.videoTitle}>
                    <TextCustomize size='sm' numberOfLines={2}>
                        {data.title}
                    </TextCustomize>
                    <TextCustomize size='xs' numberOfLines={1} style={styles.desc}>
                        {data.isPrivate ? 'Private' : 'Public'}
                    </TextCustomize>
                </View>
                <View style={styles.flex1}>
                    <VideoInfo />
                </View>
            </View>
        </View>
    );
};

export default Playlist;
