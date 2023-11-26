import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Platform, Pressable, ScrollView, View, useWindowDimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
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
import Category from '~/components/category';
import { comments, videos as videosData } from '../../data';
import { formatView } from '../../utils';
import Comment from '../comment/Comment';
import Comments from '../comments/Comments';
import {
    CutIcon,
    DislikeActiveIcon,
    DislikeIcon,
    DownloadIcon,
    LikeActiveIcon,
    LikeIcon,
    SaveIcon,
    ShareIcon,
} from '../icons';
import InfoVideo from '../infoVideo/InfoVideo';
import PlayingVideo from '../playingVideo/PlayingVideo';
import TextCustomize from '../text/TextCustomize';
import VideoItem from '../videoItem/VideoItem';
import ActionsSide from './ActionsSide';
import Channel from './Channel';
import InfoSide from './InfoSide';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { inc } from '../../features/playingVideoSlice';

const SIZES = Dimensions.get('window');

const IMAGE_TOP_DISTANCE = 100;
const IMAGE_BOTTOM_DISTANCE = (SIZES.height * 80) / 100;
const BIG_IMAGE_SIZE = (SIZES.width * 210) / 375;

const IMAGE_WIDTH_COL = 129;

const SIDE_HEIGHT = 54;
const NAVIGATION_HEIGHT = 49;

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

const DetailVideo = ({ selectedVideo }) => {
    const route = useRoute();

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const { top, bottom } = useSafeAreaInsets();
    const { height } = useWindowDimensions();

    const [status, setStatus] = useState(0);
    const [videos, setVideos] = useState([]);
    const [isShowComment, setShowComment] = useState(false);
    const { count } = useSelector((state) => state.playingVideo);
    const dispatch = useDispatch();

    const ref = useRef(null);
    const bottomTranslateY = useMemo(() => height - SIDE_HEIGHT - top - bottom - NAVIGATION_HEIGHT, []);

    useLayoutEffect(() => {
        ref.current?.scrollTo({
            y: 0,
            animated: true,
        });

        if (selectedVideo) translateY.value = 0;
    }, [selectedVideo]);

    useEffect(() => {
        const data = videosData
            .filter((videoData) => videoData.id !== selectedVideo.id)
            .sort(() => Math.random() - Math.random());
        setVideos(data);
    }, [selectedVideo]);

    useLayoutEffect(() => {
        if (count > 0) translateY.value = bottomTranslateY;

        dispatch(inc());
    }, [route.name]);

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

    const translateStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        height: interpolate(
            translateY.value,
            [IMAGE_TOP_DISTANCE, bottomTranslateY],
            [SIZES.height - top - bottom, SIDE_HEIGHT],
            {
                extrapolateRight: Extrapolate.CLAMP,
                extrapolateLeft: Extrapolate.CLAMP,
            },
        ),
    }));

    const imageStyle = useAnimatedStyle(() => ({
        width: interpolate(
            translateY.value,
            [(SIZES.height * 70) / 100, (SIZES.height * 75) / 100],
            [SIZES.width, IMAGE_WIDTH_COL],
            {
                extrapolateRight: Extrapolate.CLAMP,
                extrapolateLeft: Extrapolate.CLAMP,
            },
        ),
        height: interpolate(
            translateY.value,
            [IMAGE_TOP_DISTANCE, IMAGE_BOTTOM_DISTANCE],
            [BIG_IMAGE_SIZE, SIDE_HEIGHT],
            {
                extrapolateRight: Extrapolate.CLAMP,
                extrapolateLeft: Extrapolate.CLAMP,
            },
        ),
    }));

    const detailsStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateY.value, [IMAGE_TOP_DISTANCE, (SIZES.height * 60) / 100], [1, 0], {
            extrapolateRight: Extrapolate.CLAMP,
            extrapolateLeft: Extrapolate.CLAMP,
        }),
    }));

    const handleClickSide = useCallback(() => {
        if (translateY.value > 100) translateY.value = withTiming(0, { duration: 300 });
    });

    const handleOpenComment = () => Platform.OS !== 'web' && setShowComment(true);

    const handleLike = () => setStatus((prev) => (prev === 1 ? 0 : 1));
    const handleDislike = () => setStatus((prev) => (prev === 2 ? 0 : 2));

    return (
        <Animated.View style={[translateStyle, styles.wrapper, { height: SIZES.height - top - bottom }]}>
            <Comments isShow={isShowComment} setShow={setShowComment} />

            <View style={styles.playerContainer}>
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View>
                        <Pressable onPress={handleClickSide} style={styles.playerContainer}>
                            <Animated.View style={[imageStyle]}>
                                {/* Video */}
                                <PlayingVideo
                                    video={selectedVideo}
                                    nextVideo={videos[0]}
                                    translateY={translateY}
                                    bottomTranslateY={bottomTranslateY}
                                    handleClickSide={handleClickSide}
                                />
                            </Animated.View>

                            <InfoSide selectedVideo={selectedVideo} />
                        </Pressable>
                    </Animated.View>
                </PanGestureHandler>

                {/* Side actions */}
                <ActionsSide />
            </View>

            <Animated.ScrollView style={[detailsStyle]} ref={ref}>
                {/* Info video */}
                <InfoVideo video={selectedVideo} />

                {/* Channel */}
                <Channel selectedVideo={selectedVideo} />

                {/* Categories */}
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.categories}>
                    <Category.Wrapper isView>
                        <Category.Wrapper onPress={handleLike}>
                            <Category icon={status === 1 ? LikeActiveIcon : LikeIcon}>
                                {formatView(selectedVideo.like, false)}
                            </Category>
                        </Category.Wrapper>
                        <Category.Separator />
                        <Category.Wrapper onPress={handleDislike}>
                            <Category icon={status === 2 ? DislikeActiveIcon : DislikeIcon} />
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
                {videos.map((video) => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </Animated.ScrollView>
        </Animated.View>
    );
};

export default DetailVideo;
