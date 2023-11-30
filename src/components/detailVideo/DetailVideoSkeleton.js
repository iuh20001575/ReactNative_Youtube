import { Skeleton } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import VideoItemSkeleton from '../videoItem/VideoItemSkeleton';
import styles from './styles';

export default function DetailVideoSkeleton() {
    return (
        <View style={styles.skeletonContainer}>
            <Skeleton height='unset' style={styles.videoSkeleton} />
            <View style={styles.info}>
                <Skeleton height={18} />
                <Skeleton height={18} style={{ marginTop: 4 }} />
                <Skeleton height={14} width='60%' style={{ marginTop: 4 }} />
            </View>
            <View
                style={{
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                }}
            >
                <Skeleton height={32} width={32} circle />
                <View style={{ flex: 1 }}>
                    <Skeleton height={14} width='50%' />
                </View>
                <Skeleton height={36} width={64} circle />
            </View>
            <View style={{ flexDirection: 'row', gap: 16, paddingHorizontal: 12, paddingVertical: 8 }}>
                <Skeleton height={32} width={100} circle />
                <Skeleton height={32} width={100} circle />
                <Skeleton height={32} width={100} circle />
                <Skeleton height={32} width={100} circle />
            </View>
            <View style={{ padding: 12 }}>
                <Skeleton height={68} />
            </View>
            <VideoItemSkeleton />
            <VideoItemSkeleton />
            <VideoItemSkeleton />
        </View>
    );
}
