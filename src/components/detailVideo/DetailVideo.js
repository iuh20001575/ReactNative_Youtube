import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Platform, Pressable, ScrollView, StatusBar, View } from 'react-native';
import { PanGestureHandler, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import Category from '~/components/category';
import { comments, videos as videosData } from '../../data';
import { addVideo } from '../../features/playingVideoSlice';
import { formatView } from '../../utils';
import Comment from '../comment/Comment';
import {
    CloseIcon,
    ControlIcon,
    CutIcon,
    DislikeIcon,
    DownArrowIcon,
    DownloadIcon,
    LikeIcon,
    NotificationIcon,
    SaveIcon,
    ShareIcon,
} from '../icons';
import InfoVideo from '../infoVideo/InfoVideo';
import PlayingVideo from '../playingVideo/PlayingVideo';
import TextCustomize from '../text/TextCustomize';
import VideoItem from '../videoItem/VideoItem';
import styles from './styles';

const SIZES = Dimensions.get('window');

const IMAGE_TOP_DISTANCE = 100;
const IMAGE_BOTTOM_DISTANCE = SIZES.width / 1.2;
const BIG_IMAGE_SIZE = (SIZES.width * 210) / 375;

const IMAGE_WIDTH_COL = 129;

const screenHeight = Dimensions.get('screen').height;
let bottomTranslateY = screenHeight - 54 - 49 * 2 - StatusBar.currentHeight;

const categories = [
    {
        icon: ShareIcon,
        title: 'Share',
    },
    {
        icon: DownloadIcon,
        title: 'Download',
    },
    {
        icon: CutIcon,
        title: 'Clip',
    },
    {
        icon: SaveIcon,
        title: 'Save',
    },
];

const comment = comments[0];

const DetailVideo = ({ onClose, selectedVideo }) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(300);
    const { top, bottom } = useSafeAreaInsets();
    const [videos, setVideos] = useState([]);
    const ref = useRef(null);
    const dispatch = useDispatch();
    const [isShowComment, setShowComment] = useState(false);

    useEffect(() => {
        translateY.value = withTiming(0, { duration: 300 });
    }, []);

    useEffect(() => {
        if (selectedVideo) {
            translateY.value = withTiming(0, { duration: 300 });
        }
    }, [selectedVideo]);

    useEffect(() => {
        ref.current?.scrollTo({
            y: 0,
            animated: true,
        });

        const data = videosData
            .filter((videoData) => videoData.id !== selectedVideo.id)
            .sort(() => Math.random() - Math.random());
        setVideos(data);
        dispatch(addVideo(selectedVideo));
    }, [selectedVideo]);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.translateX = translateX.value;
            ctx.translateY = translateY.value;

            ctx.bottomSwipe = ctx.translateY === bottomTranslateY;
        },
        onActive: (event, ctx) => {
            translateX.value = event.translationX + ctx.translateX;
            translateY.value = event.translationY + ctx.translateY;
        },
        onEnd: (_, ctx) => {
            if (ctx.bottomSwipe && bottomTranslateY - 80 > translateY.value) {
                translateY.value = withTiming(0, { duration: 300 });
                return;
            }

            if (translateY.value > 100) {
                translateY.value = withTiming(bottomTranslateY, {
                    duration: 300,
                });
                return;
            }

            translateY.value = withTiming(0, { duration: 300 });
        },
    });

    const translateStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
            height: interpolate(
                translateY.value,
                [IMAGE_TOP_DISTANCE, SIZES.height - top - bottom - 54 - 49],
                [SIZES.height - top - bottom, 54],
                {
                    extrapolateRight: Extrapolate.CLAMP,
                    extrapolateLeft: Extrapolate.CLAMP,
                },
            ),
        };
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: interpolate(
                translateY.value,
                [IMAGE_TOP_DISTANCE, IMAGE_BOTTOM_DISTANCE],
                [SIZES.width, IMAGE_WIDTH_COL],
                {
                    extrapolateRight: Extrapolate.CLAMP,
                    extrapolateLeft: Extrapolate.CLAMP,
                },
            ),
            height: interpolate(translateY.value, [IMAGE_TOP_DISTANCE, IMAGE_BOTTOM_DISTANCE], [BIG_IMAGE_SIZE, 54], {
                extrapolateRight: Extrapolate.CLAMP,
                extrapolateLeft: Extrapolate.CLAMP,
            }),
            padding: interpolate(translateY.value, [IMAGE_TOP_DISTANCE, (SIZES.height * 70) / 100], [0, 0], {
                extrapolateRight: 0,
                extrapolateLeft: 0,
            }),
        };
    });

    const detailsStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(translateY.value, [IMAGE_TOP_DISTANCE, (SIZES.height * 70) / 100], [1, 0], {
                extrapolateRight: Extrapolate.CLAMP,
                extrapolateLeft: Extrapolate.CLAMP,
            }),
        };
    });

    const expandPlayer = () => {
        if (translateY.value > 100) translateY.value = withTiming(0, { duration: 300 });
    };

    const handleOpenComment = () => Platform.OS !== 'web' && setShowComment(true);

    return (
        <Animated.View style={[translateStyle, styles.wrapper, { height: SIZES.height - top - bottom }]}>
            <View style={styles.playerContainer}>
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View>
                        <TouchableWithoutFeedback onPress={expandPlayer} style={styles.playerContainer}>
                            <Animated.View style={[imageStyle]}>
                                {/* Video */}
                                <PlayingVideo video={selectedVideo} nextVideo={videos[0]} />
                            </Animated.View>

                            <View style={[styles.side, { width: SIZES.width - 235 }]}>
                                <TextCustomize size='xs' numberOfLines={1} style={[styles.sideText]}>
                                    {selectedVideo?.title}
                                </TextCustomize>

                                <TextCustomize
                                    numberOfLines={1}
                                    size='xs'
                                    style={[styles.sideText, styles.sideChannelName]}
                                >
                                    {selectedVideo?.channelName}
                                </TextCustomize>
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
                </PanGestureHandler>

                {/* Side actions */}
                <View style={[styles.iconsContainer]}>
                    <Pressable style={styles.sideBtn}>
                        <ControlIcon width={18} height={18} fill='#000' />
                    </Pressable>
                    <Pressable style={styles.sideBtn}>
                        <CloseIcon width={24} height={24} />
                    </Pressable>
                </View>
            </View>

            <Animated.ScrollView style={[detailsStyle, styles.container]} ref={ref}>
                {/* Info video */}
                <InfoVideo video={selectedVideo} />

                {/* Channel */}
                <View style={styles.channelWrapper}>
                    <View style={styles.channel}>
                        <Image source={selectedVideo.avatar} style={styles.avatar} />
                        <View style={styles.channelInfo}>
                            <TextCustomize fontWeight={500} size='sm'>
                                {selectedVideo.channelName}
                            </TextCustomize>
                            <TextCustomize size='xs' style={styles.textSecondary}>
                                {formatView(Math.random() * 10000000, false)}
                            </TextCustomize>
                        </View>
                    </View>
                    <Pressable style={styles.subscriptionBtn}>
                        <NotificationIcon />
                        <DownArrowIcon />
                    </Pressable>
                </View>

                {/* Categories */}
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.categories}>
                    <Category.Wrapper isView>
                        <Category.Wrapper>
                            <Category icon={LikeIcon}>{formatView(selectedVideo.like, false)}</Category>
                        </Category.Wrapper>
                        <Category.Separator />
                        <Category.Wrapper>
                            <Category icon={DislikeIcon}></Category>
                        </Category.Wrapper>
                    </Category.Wrapper>

                    {categories.map((category) => (
                        <Category.Wrapper key={uuid.v4()}>
                            <Category icon={category.icon}>{category.title}</Category>
                        </Category.Wrapper>
                    ))}
                </ScrollView>

                {/* Comments */}
                <Pressable onPress={handleOpenComment} style={styles.comments}>
                    <View style={styles.commentHeader}>
                        <TextCustomize fontWeight={700} size='sm' style={styles.commentTitle}>
                            Comments
                        </TextCustomize>
                        <TextCustomize size='xs' style={styles.commentCount}>
                            32
                        </TextCustomize>
                    </View>
                    <Comment lineText={2} comment={comment} />
                </Pressable>

                {/* Videos */}
                <View style={styles.videos}>
                    {videos.map((video) => (
                        <VideoItem key={video.id} video={video} />
                    ))}
                </View>
            </Animated.ScrollView>
        </Animated.View>
    );
};

export default DetailVideo;
