import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import uuid from 'react-native-uuid';
import Filter from '~/components/filter';
import SubscriptionChannel from '~/components/subscriptionChannel';
import TextCustomize from '~/components/text';
import VideoItem from '~/components/videoItem';
import DefaultLayout from '~/layouts/defaultLayout';
import { FilterProvider } from '../../context/filterContext';
import { channels } from '../../data';
import videosData from '../../data/videos';
import styles from './styles';

const filers = [
    {
        title: 'All',
    },
    {
        title: 'Today',
    },
    {
        title: 'Live',
    },
    {
        title: 'Continue watching',
    },
    {
        title: 'Unwatched',
    },
];

const Subscriptions = () => {
    const [filter, setFilter] = useState('All');
    const videos = useMemo(() => {
        if (filter === 'All') return videosData;

        if (filter === 'New to you') return [...videosData].sort((a, b) => new Date(b.date) - new Date(a.date));

        return videosData.filter((video) => video.type === filter.toLowerCase());
    }, [videosData, filter]);

    return (
        <FilterProvider value={{ filter, setFilter }}>
            <DefaultLayout>
                {/* Subscription Channel */}
                <View style={styles.subscriptionChannel}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={() => uuid.v4()}
                        data={channels}
                        renderItem={({ item }) => <SubscriptionChannel data={item} />}
                    />
                    <Pressable style={styles.allChannelBtn}>
                        <TextCustomize fontWeight={500} size='sm' style={styles.allChannelBtnText}>
                            All
                        </TextCustomize>
                    </Pressable>
                </View>

                {/* Filter */}
                <View style={styles.filter}>
                    <Filter data={filers} />
                </View>

                {videos.map((video) => (
                    <VideoItem key={uuid.v4()} video={video} />
                ))}
            </DefaultLayout>
        </FilterProvider>
    );
};

export default Subscriptions;
