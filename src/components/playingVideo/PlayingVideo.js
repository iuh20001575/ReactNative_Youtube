import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import TextCustomize from '../../components/text';
import { addVideo, prevVideo, setPlaying, togglePlaying } from '../../features/playingVideoSlice';
import { formatTimeVideo } from '../../utils';
import {
    AutoPlayIcon,
    CastIcon,
    ControlIcon,
    DownArrowIcon,
    FullScreenIcon,
    NextIcon,
    PlayIcon,
    PreviousIcon,
    SettingIcon,
    SubtitleIcon,
} from '../icons';
import VideoCustomize from '../video/VideoCustomize';
import styles from './styles';

let idDuration;
let idShowAction;

const PlayingVideo = ({ video, nextVideo, translateY, bottomTranslateY, handleClickSide }) => {
    const [currentDuration, setCurrentDuration] = useState(0);
    const [showActions, setShowActions] = useState(true);
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef();
    const { index, isPlaying } = useSelector((state) => state.playingVideo);
    const dispatch = useDispatch();
    const focus = useIsFocused();

    const handleClickVideo = () => {
        if (translateY?.value && translateY?.value > 0) handleClickSide();
        else {
            setShowActions(true);
            setCount(0);
        }
    };

    const handleClickActions = () => {
        if (translateY?.value && translateY?.value > 0) handleClickSide();
        else {
            setCount(count + 1);
            setShowActions(false);
        }
    };

    const handleReadyForDisplay = () => {
        setLoaded(true);
        console.log('handleReadyForDisplay');
    };

    const handleControl = () => dispatch(togglePlaying());
    const handleNextVideo = () => dispatch(addVideo(nextVideo));
    const handlePrevVideo = () => dispatch(prevVideo());

    const handleDown = () => (translateY.value = bottomTranslateY);

    const opacityStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(translateY.value, [0, 1], [1, 0]),
        };
    });

    useEffect(() => {
        setCurrentDuration(0);
        dispatch(setPlaying(true));
        setCount(0);
        setLoaded(false);
        setShowActions(false);
    }, [video]);

    useEffect(() => {
        if (showActions && isPlaying) idShowAction = setTimeout(() => setShowActions(false), 2000);

        return () => isPlaying && clearTimeout(idShowAction);
    }, [showActions, count, isPlaying]);

    useEffect(() => {
        if (isPlaying && loaded) {
            idDuration = setInterval(() => setCurrentDuration((value) => value + 1), 1000);
            videoRef.current.playAsync();
        } else videoRef.current.pauseAsync();

        return () => loaded && clearInterval(idDuration);
    }, [loaded, isPlaying]);

    useEffect(() => {
        if (currentDuration >= video.duration && loaded) handleNextVideo();
    }, [currentDuration, loaded]);

    useEffect(() => {
        if (!focus) dispatch(setPlaying(false));
    }, [focus]);

    return (
        <View style={styles.videoWrapper}>
            <Pressable style={styles.video} onPress={handleClickVideo}>
                <VideoCustomize onReadyForDisplay={handleReadyForDisplay} video={video} videoRef={videoRef} />
            </Pressable>
            <View style={styles.progressBar}>
                <View style={styles.loaded} />
                <View style={[styles.viewed, { width: `${(currentDuration / video.duration) * 100}%` }]}>
                    <View style={styles.point} />
                </View>
            </View>

            {/* Actions */}
            {showActions && (
                <Animated.View style={[opacityStyle, styles.container]}>
                    <Pressable onPress={handleClickActions} style={styles.actions}>
                        {/* Header */}
                        <View style={styles.header}>
                            <Pressable onPress={handleDown} style={styles.downBtn}>
                                <DownArrowIcon width={16} height={16} fill='white' />
                            </Pressable>
                            <View style={styles.headerRight}>
                                <Pressable style={styles.downBtn}>
                                    <AutoPlayIcon />
                                </Pressable>
                                <Pressable style={styles.downBtn}>
                                    <CastIcon fill='#fff' />
                                </Pressable>
                                <Pressable style={styles.downBtn}>
                                    <SubtitleIcon />
                                </Pressable>
                                <Pressable style={styles.downBtn}>
                                    <SettingIcon />
                                </Pressable>
                            </View>
                        </View>

                        {/* Body */}
                        <View style={styles.body}>
                            <Pressable
                                disabled={index < 1}
                                onPress={handlePrevVideo}
                                style={[styles.bodyBtn, styles.prevNextBtn]}
                            >
                                <PreviousIcon fill={index > 0 ? '#fff' : 'rgba(255, 255, 255, 0.5)'} />
                            </Pressable>
                            <Pressable onPress={handleControl} style={[styles.bodyBtn, styles.controlBtn]}>
                                {(isPlaying && <ControlIcon />) || <PlayIcon />}
                            </Pressable>
                            <Pressable onPress={handleNextVideo} style={[styles.bodyBtn, styles.prevNextBtn]}>
                                <NextIcon />
                            </Pressable>
                        </View>

                        {/* Footer */}
                        <View style={styles.footer}>
                            <View style={styles.durationWrapper}>
                                <TextCustomize size='sm' fontWeight={500} style={styles.currentDuration}>
                                    {formatTimeVideo(currentDuration)}
                                </TextCustomize>
                                <TextCustomize size='sm' fontWeight={500} style={styles.duration}>
                                    &nbsp;/ {formatTimeVideo(video.duration)}
                                </TextCustomize>
                            </View>
                            <Pressable style={styles.fullScreenBtn}>
                                <FullScreenIcon />
                            </Pressable>
                        </View>
                    </Pressable>
                </Animated.View>
            )}
        </View>
    );
};

export default PlayingVideo;
