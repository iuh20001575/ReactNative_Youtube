import { Skeleton } from '@rneui/themed';
import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';

const VideoItemSkeleton = () => {
    return (
        <View style={{ width: '100%' }}>
            <Skeleton style={[{ height: 'auto' }, styles.videoWrapper, { width: '100%' }]}></Skeleton>
            <View style={styles.body}>
                <Skeleton circle style={styles.avatarBtn}></Skeleton>
                <View style={styles.info}>
                    <Skeleton height={20} style={styles.title}></Skeleton>
                    <Skeleton height={20} style={styles.title}></Skeleton>
                    <Skeleton height={14} width='50%' style={styles.desc}></Skeleton>
                </View>
            </View>
        </View>
    );
};

export default memo(VideoItemSkeleton);
