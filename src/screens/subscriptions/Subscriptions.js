import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';
import Filter from '~/components/filter';
import SubscriptionChannel from '~/components/subscriptionChannel';
import TextCustomize from '~/components/text';
import VideoItem from '~/components/videoItem';
import DefaultLayout from '~/layouts/defaultLayout';
import config from '../../config';
import { FilterProvider } from '../../context/filterContext';
import videosData from '../../data/videos';
import styles from './styles';

const Subscriptions = () => {
    const [filter, setFilter] = useState('All');
    const [filters, setFilters] = useState([]);
    const [channels, setChannels] = useState([]);
    const [loading, setLoading] = useState(true);
    const videos = useMemo(() => {
        if (filter === 'All') return videosData;

        if (filter === 'New to you') return [...videosData].sort((a, b) => new Date(b.date) - new Date(a.date));

        return videosData.filter((video) => video.type === filter.toLowerCase());
    }, [videosData, filter]);

    useEffect(() => {
        const filtersPromise = new Promise((resolve, reject) =>
            fetch(`${config.ENDPOINT}/subscriptionFilters`)
                .then((data) => data.json())
                .then(resolve)
                .catch(reject),
        );
        const channelsPromise = new Promise((resolve, reject) =>
            fetch(`${config.ENDPOINT}/channels`)
                .then((data) => data.json())
                .then(resolve)
                .catch(reject),
        );

        async function getData() {
            setLoading(true);
            const [filters, channels] = await Promise.all([filtersPromise, channelsPromise]);

            setChannels(channels);
            setFilters(filters);
            setLoading(false);
        }

        getData();
    }, []);

    return (
        <FilterProvider value={{ filter, setFilter }}>
            <DefaultLayout>
                {(loading && (
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='#004fd2' />
                    </View>
                )) || (
                    <Fragment>
                        {/* Subscription Channel */}
                        <View style={styles.subscriptionChannel}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                keyExtractor={(item) => item.id}
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
                            <Filter data={filters} />
                        </View>

                        {videos.map((video) => (
                            <VideoItem key={video.id} video={video} />
                        ))}
                    </Fragment>
                )}
            </DefaultLayout>
        </FilterProvider>
    );
};

export default Subscriptions;
