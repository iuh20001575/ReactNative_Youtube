import React from 'react';
import { Dimensions, View } from 'react-native';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const SIZES = Dimensions.get('window');

export default function InfoSide({ selectedVideo }) {
    return (
        <View style={[styles.side, { width: SIZES.width - 235 }]}>
            <TextCustomize size='xs' numberOfLines={1} style={[styles.sideText]}>
                {selectedVideo?.title}
            </TextCustomize>
            <TextCustomize numberOfLines={1} size='xs' style={[styles.sideText, styles.sideChannelName]}>
                {selectedVideo?.channelName}
            </TextCustomize>
        </View>
    );
}
