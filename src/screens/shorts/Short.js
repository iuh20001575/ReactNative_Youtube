import InViewPort from '@coffeebeanslabs/react-native-inviewport';
import { ResizeMode, Video } from 'expo-av';
import React, { useState } from 'react';
import { Image, Pressable, View, useWindowDimensions } from 'react-native';
import TextCustomize from '~/components/text';
import {
    CommentIconWhite,
    LikeIconWhite,
    RemixIconWhite,
    ShareIconWhite,
    ShortInfo,
    Subscribe,
    UnlikeIconWhite,
} from '../../components/icons/icons';
import { formatView } from '../../utils';
import styles from './styles';

export default function Short({ video }) {
    const { height } = useWindowDimensions();
    const [shouldPlay, setShouldPlay] = useState(false);
    const [positionMillis, setPositionMillis] = useState(0);
    const [click, setClick] = useState(false);
    console.log('🚀 ~ Short ~ click:', click);

    return (
        <InViewPort
            onChange={(value) => {
                console.log('🚀 ~ Short ~ value:', value);
                if (click) setClick(false);
                else {
                    setShouldPlay(value);
                    setPositionMillis(0);
                }
            }}
        >
            <View style={[styles.bodyLayout, { height: height - 48 }]}>
                <Pressable
                    onPress={() => {
                        setShouldPlay((prev) => !prev);
                        setClick(true);
                    }}
                    style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                >
                    <Video
                        resizeMode={ResizeMode.COVER}
                        shouldPlay={shouldPlay}
                        style={{ width: '100%', height: '100%' }}
                        videoStyle={{ width: '100%', height: '100%' }}
                        source={{ uri: video.videoUrl }}
                        isLooping
                    ></Video>
                </Pressable>

                <View style={styles.headerLayout}>
                    <View style={styles.headerIcon}>
                        <ShortInfo />
                    </View>
                </View>
                <View style={styles.actionLayout}>
                    <View style={styles.actionItem}>
                        <LikeIconWhite />
                        <TextCustomize style={styles.textAction}>{formatView(video.like, false)}</TextCustomize>
                    </View>
                    <View style={styles.actionItem}>
                        <UnlikeIconWhite />
                        <TextCustomize style={styles.textAction}>Dislike</TextCustomize>
                    </View>
                    <View style={styles.actionItem}>
                        <CommentIconWhite />
                        <TextCustomize style={styles.textAction}>{formatView(video.dislike, false)}</TextCustomize>
                    </View>
                    <View style={styles.actionItem}>
                        <ShareIconWhite />
                        <TextCustomize style={styles.textAction}>share</TextCustomize>
                    </View>
                    <View style={styles.actionItem}>
                        <RemixIconWhite />
                        <TextCustomize style={styles.textRemix}>Remix</TextCustomize>
                    </View>
                </View>

                <View style={styles.imageMusicLayout}>
                    <Image source={{ uri: video.avatar }}></Image>
                </View>
                <View style={styles.infoLayout}>
                    <TextCustomize style={{ color: '#fff' }}>{video.title}</TextCustomize>
                    <View style={styles.chanelLayout}>
                        <View style={styles.channelItem}>
                            <View style={styles.imageChannelLayout}>
                                <Image style={styles.imageChannel} source={{ uri: video.avatar }}></Image>
                            </View>
                            <TextCustomize style={{ color: '#fff' }}>{video.channelTag}</TextCustomize>
                        </View>
                        <Subscribe style={styles.subButtonLayout} />
                    </View>
                </View>
                <View style={styles.progressBar}>
                    <View style={styles.loaded} />
                    <View style={[styles.viewed /*{ width: `${(currentDuration / duration) * 100}%` }*/]}>
                        <View style={styles.point} />
                    </View>
                </View>
            </View>
        </InViewPort>
    );
}
