import React from 'react';
import { Pressable, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { reset } from '../../features/playingVideoSlice';
import { CloseIcon, ControlIcon } from '../icons';
import styles from './styles';

export default function ActionsSide() {
    const dispatch = useDispatch();

    const handleCloseSide = () => dispatch(reset());

    return (
        <View style={[styles.iconsContainer]}>
            <Pressable style={styles.sideBtn}>
                <ControlIcon width={18} height={18} fill='#000' />
            </Pressable>
            <Pressable onPress={handleCloseSide} style={styles.sideBtn}>
                <CloseIcon width={24} height={24} />
            </Pressable>
        </View>
    );
}
