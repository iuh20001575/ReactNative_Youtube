import React from 'react';
import { View } from 'react-native';
import Filter from '~/components/filter';
import { ExploreIcon, ShortsRedIcon } from '~/components/icons';
import ShortImage from '~/components/shortImage';
import TextCustomize from '~/components/text';
import Video from '~/components/videoItem';
import DefaultLayout from '~/layouts/defaultLayout';
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

const videos = [
    {
        videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        posterUrl: '',
        avatar: 'https://images.unsplash.com/photo-1696061416696-98cb5e9c3b2a?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'React Native vs Flutter - I built the same chat app with both',
        channelName: 'Fireship',
        views: 1600,
        date: '2023-10-17',
    },
    {
        videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        posterUrl: '',
        avatar: 'https://images.unsplash.com/photo-1696061416696-98cb5e9c3b2a?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Niji/Masaki Suda - Stand By Me Doraemon 2 - lyrics [Kanji, Romaji, ENG]',
        channelName: 'Hollow of Japan',
        views: 1400000,
        date: '2021-10-17',
    },
];

const Home = ({ route }) => {
    console.log('🚀 ~ Home ~ route:', route);
    return (
        <DefaultLayout>
            {/* Filter */}
            <View style={styles.filterContainer}>
                <Filter data={filters} />
            </View>

            {/* Video */}
            <Video video={videos[0]} />

            {/* Shorts */}
            {route.params.filter === 'All' && (
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
                <Video video={videos[1]} />
                <Video video={videos[0]} />
                <Video video={videos[0]} />
                <Video video={videos[0]} />
            </View>
        </DefaultLayout>
    );
};

export default Home;
