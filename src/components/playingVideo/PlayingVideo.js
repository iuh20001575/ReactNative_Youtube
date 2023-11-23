import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TextCustomize from '../../components/text';
import { addVideo, prevVideo } from '../../features/playingVideoSlice';
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

const PlayingVideo = ({ video, nextVideo }) => {
    const navigation = useNavigation();
    const [currentDuration, setCurrentDuration] = useState(0);
    const [isPlaying, setPlaying] = useState(true);
    const [showActions, setShowActions] = useState(false);
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef();
    const { index, videos } = useSelector((state) => state.playingVideo);
    const dispatch = useDispatch();

    const handleClickVideo = (e) => {
        setShowActions(true);
        setCount(0);
    };

    const handleClickActions = () => {
        setCount(count + 1);
        setShowActions(false);
    };

    const handleControl = () => {
        setPlaying((isPlaying) => !isPlaying);
    };

    const handleReadyForDisplay = () => {
        setLoaded(true);
        console.log('handleReadyForDisplay');
    };

    const handleNextVideo = () => {
        dispatch(addVideo(nextVideo));
    };

    const handlePrevVideo = () => {
        dispatch(prevVideo());
    };

    useEffect(() => {
        setCurrentDuration(0);
        setPlaying(true);
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

    return (
        <View style={styles.videoWrapper}>
            <Pressable style={styles.video} onPress={handleClickVideo}>
                <VideoCustomize onReadyForDisplay={handleReadyForDisplay} video={video} videoRef={videoRef} />
                {loaded || <Image source={video.posterUrl} style={{ width: '100%', aspectRatio: 375 / 210 }} />}
            </Pressable>
            <View style={styles.progressBar}>
                <View style={styles.loaded} />
                <View style={[styles.viewed, { width: `${(currentDuration / video.duration) * 100}%` }]}>
                    <View style={styles.point} />
                </View>
            </View>

            {/* Actions */}
            {showActions && (
                <Pressable onPress={handleClickActions} style={styles.actions}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Pressable style={styles.downBtn}>
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
                            disabled={!index}
                            onPress={handlePrevVideo}
                            style={[styles.bodyBtn, styles.prevNextBtn]}
                        >
                            <PreviousIcon fill={index ? '#fff' : 'rgba(255, 255, 255, 0.5)'} />
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
            )}
        </View>
    );
};

export default PlayingVideo;
