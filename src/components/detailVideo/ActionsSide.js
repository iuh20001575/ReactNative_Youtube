import React from 'react';
import { Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { reset, togglePlaying } from '../../features/playingVideoSlice';
import { CloseIcon, ControlIcon, PlayIcon } from '../icons';
import styles from './styles';

export default function ActionsSide() {
    const isPlaying = useSelector((state) => state.playingVideo.isPlaying);
    const dispatch = useDispatch();

    const Icon = (isPlaying && ControlIcon) || PlayIcon;

    const handleCloseSide = () => dispatch(reset());

    const handleControl = () => dispatch(togglePlaying());

    return (
        <View style={[styles.iconsContainer]}>
            <Pressable onPress={handleControl} style={styles.sideBtn}>
                <Icon width={18} height={18} fill='#000' />
            </Pressable>
            <Pressable onPress={handleCloseSide} style={styles.sideBtn}>
                <CloseIcon width={24} height={24} />
            </Pressable>
        </View>
    );
}
