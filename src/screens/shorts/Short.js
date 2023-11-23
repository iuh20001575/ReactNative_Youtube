import { ResizeMode, Video } from 'expo-av';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextCustomize from '~/components/text';
import {
    CommentIconWhite,
    LikeIconWhite,
    MusicIcon,
    RemixIconWhite,
    ShareIconWhite,
    ShortInfo,
    Subscribe,
    UnlikeIconWhite,
} from '../../components/icons/icons';
import ShortAction from '../../components/shortAction/ShortAction';
import { formatView } from '../../utils';
import styles from './styles';

function Short({ video, height, active }) {
    const [shouldPlay, setShouldPlay] = useState(false);
    const { top } = useSafeAreaInsets();
    const ref = useRef();

    const handleControl = () => setShouldPlay((prev) => !prev);

    useEffect(() => {
        setShouldPlay(active);

        if (active) ref.current?.replayAsync?.();
    }, [active]);

    return (
        <View style={{ height }}>
            <View style={[styles.bodyLayout, styles.flex1]}>
                <View style={styles.videoWrapper}>
                    <Video
                        resizeMode={ResizeMode.COVER}
                        shouldPlay={shouldPlay}
                        style={styles.video}
                        videoStyle={styles.video}
                        source={{ uri: video.videoUrl }}
                        isLooping
                        ref={ref}
                    />
                </View>

                {/* Actions */}
                <Pressable onPress={handleControl} style={[styles.videoWrapper, { top }]}>
                    {/* Header */}
                    <View style={styles.headerLayout}>
                        <View></View>
                        <Pressable style={styles.headerIcon}>
                            <ShortInfo />
                        </Pressable>
                    </View>

                    {/* Side */}
                    <View style={styles.actionLayout}>
                        <ShortAction icon={LikeIconWhite}>{formatView(video.like, false)}</ShortAction>
                        <ShortAction icon={UnlikeIconWhite}>{formatView(video.dislike, false)}</ShortAction>
                        <ShortAction icon={CommentIconWhite}>{formatView(video.comment, false)}</ShortAction>
                        <ShortAction icon={ShareIconWhite}>Share</ShortAction>
                        <ShortAction icon={RemixIconWhite}>Remix</ShortAction>
                    </View>

                    {/* Music */}
                    <View style={styles.imageMusicLayout}>
                        <Image style={styles.imageMusic} source={{ uri: video.avatar }}></Image>
                    </View>

                    {/* Info */}
                    <View style={styles.infoLayout}>
                        <View style={styles.chanelLayout}>
                            <View style={styles.channelItem}>
                                <View style={styles.imageChannelLayout}>
                                    <Image style={styles.imageChannel} source={{ uri: video.avatar }}></Image>
                                </View>
                                <TextCustomize style={styles.textColor}>{video.channelTag}</TextCustomize>
                            </View>
                            <Subscribe style={styles.subButtonLayout} />
                        </View>
                        <TextCustomize style={styles.textColor}>{video.title}</TextCustomize>
                        <View style={styles.musicWrapper}>
                            <MusicIcon />
                            <TextCustomize numberOfLines={3} size='sm' style={styles.textColor}>
                                Original Sound
                            </TextCustomize>
                        </View>
                    </View>

                    {/* Progress */}
                    <View style={styles.progressBar}>
                        <View style={styles.loaded} />
                        <View style={[styles.viewed /*{ width: `${(currentDuration / duration) * 100}%` }*/]}>
                            <View style={styles.point} />
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

export default memo(Short);
