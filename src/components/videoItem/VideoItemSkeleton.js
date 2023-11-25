import { Skeleton } from '@rneui/themed';
import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';

const VideoItemSkeleton = () => {
    return (
        <View>
            <Skeleton style={[{ height: 'auto' }, styles.videoWrapper]} />
            <View style={styles.body}>
                <Skeleton width={28} height={28} circle />
                <View style={styles.info}>
                    <Skeleton height={20} style={styles.title} />
                    <Skeleton height={20} style={styles.title} />
                    <Skeleton height={14} width='50%' style={styles.desc} />
                </View>
            </View>
        </View>
    );
};

export default memo(VideoItemSkeleton);
