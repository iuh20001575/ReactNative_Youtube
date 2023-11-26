import { useNavigation, useRoute } from '@react-navigation/native';
import { ResizeMode, Video } from 'expo-av';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    BackIcon,
    CommentIconWhite,
    LikeIconWhite,
    RemixIconWhite,
    ShareIconWhite,
    ShortInfo,
    Subscribe,
    UnlikeIconWhite,
} from '../../components/icons/icons';
import ShortAction from '../../components/shortAction/ShortAction';
import TextCustomize from '../../components/text/TextCustomize';
import { formatView } from '../../utils';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../features/themeSlice';

function Short({ video, height, active }) {
    const navigation = useNavigation();
    const route = useRoute();
    const showBack = route.params?.showBack;

    const [shouldPlay, setShouldPlay] = useState(false);
    const [widthProgress, setWidthProgress] = useState(0);
    const { top } = useSafeAreaInsets();
    const ref = useRef();
    const dispatch = useDispatch();

    const handleControl = () => setShouldPlay((prev) => !prev);
    const handlePlaybackStatusUpdate = (e) => setWidthProgress((e.positionMillis / e.durationMillis) * 100);
    const handleGoBack = () => {
        dispatch(setTheme(false));
        navigation.goBack();
    };

    useEffect(() => {
        setShouldPlay(active);

        if (active) ref.current?.replayAsync?.();
    }, [active]);

    useEffect(() => {
        if (shouldPlay) ref.current.playAsync();
        else ref.current.pauseAsync();
    }, [shouldPlay]);

    console.log('Render short', video.id);

    return (
        <View style={{ height }}>
            <View style={[styles.bodyLayout, styles.flex1]}>
                <View style={styles.videoWrapper}>
                    <Video
                        resizeMode={ResizeMode.COVER}
                        style={styles.video}
                        videoStyle={styles.video}
                        source={{ uri: video.videoUrl }}
                        isLooping
                        ref={ref}
                        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                    />
                </View>

                {/* Actions */}
                <Pressable onPress={handleControl} style={[styles.videoWrapper, { top }]}>
                    {/* Header */}
                    <View style={styles.headerLayout}>
                        <View style={styles.headerLeft}>
                            {!showBack || (
                                <Pressable onPress={handleGoBack}>
                                    <BackIcon fill='#fff' />
                                </Pressable>
                            )}
                            {!shouldPlay && !!widthProgress && (
                                <TextCustomize style={styles.headerTitle} size='xxl' fontWeight={700}>
                                    Shorts
                                </TextCustomize>
                            )}
                        </View>
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
                        <TextCustomize style={styles.textColor}>{video.title}</TextCustomize>
                        <View style={styles.chanelLayout}>
                            <View style={styles.channelItem}>
                                <View style={styles.imageChannelLayout}>
                                    <Image style={styles.imageChannel} source={{ uri: video.avatar }}></Image>
                                </View>
                                <TextCustomize style={styles.textColor}>{video.channelTag}</TextCustomize>
                            </View>
                            <Subscribe style={styles.subButtonLayout} />
                        </View>
                    </View>

                    {/* Progress */}
                    <View style={styles.progressBar}>
                        <View style={styles.loaded} />
                        <View style={[styles.viewed, { width: `${widthProgress}%` }]}>
                            <View style={styles.point} />
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

export default memo(Short);
