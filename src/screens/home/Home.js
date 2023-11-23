import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import uuid from 'react-native-uuid';
import Filter from '~/components/filter';
import { ExploreIcon, ShortsRedIcon } from '~/components/icons';
import ShortImage from '~/components/shortImage';
import TextCustomize from '~/components/text';
import DefaultLayout from '~/layouts/defaultLayout';
import Video from '../../components/videoItem/VideoItem';
import { FilterProvider } from '../../context/filterContext';
import videosData from '../../data/videos';
import styles from './styles';

const filters = [
    {
        icon: ExploreIcon,
    },
    {
        title: 'All',
    },
    {
        title: 'New to you',
        special: true,
    },
    {
        title: 'Music',
    },
    {
        title: 'Lo-fi',
    },
    {
        title: 'Gaming',
    },
];

const Home = () => {
    const [filter, setFilter] = useState('All');
    const [firstVideo, ...videos] = useMemo(() => {
        if (filter === 'All') return videosData;

        if (filter === 'New to you') return [...videosData].sort((a, b) => new Date(b.date) - new Date(a.date));

        return videosData.filter((video) => video.type === filter.toLowerCase());
    }, [videosData, filter]);

    return (
        <FilterProvider value={{ filter, setFilter }}>
            <DefaultLayout>
                {/* Filter */}
                <View style={styles.filterContainer}>
                    <Filter data={filters} />
                </View>

                {/* Video */}
                <Video video={firstVideo} />

                {/* Shorts */}
                {filter === 'All' && (
                    <View style={styles.shortsContainer}>
                        <View style={styles.shortsHeader}>
                            <ShortsRedIcon />
                            <TextCustomize size='md' fontWeight='500'>
                                Shorts
                            </TextCustomize>
                        </View>
                        <ShortImage />
                    </View>
                )}

                {/* List Video */}
                <View style={styles.listVideo}>
                    {videos.map((video) => (
                        <Video key={uuid.v4()} video={video} />
                    ))}
                </View>
            </DefaultLayout>
        </FilterProvider>
    );
};

export default Home;
