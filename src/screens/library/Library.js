import React, { Fragment, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import uuid from 'react-native-uuid';
import DefaultLayout from '~/layouts/defaultLayout/DefaultLayout';
import HistoryItem from '../../components/historyItem/HistoryItem';
import { Downloads, HistoryIcon, PlaylistIcon, YourMovies, YourVideos } from '../../components/icons/icons';
import LibraryHeader from '../../components/libraryHeader/LibraryHeader';
import LibraryItem from '../../components/libraryItem/LibraryItem';
import Playlist from '../../components/playlist';
import config from '../../config';
import styles from './styles';

const options = [
    {
        title: 'Your videos',
        icon: YourVideos,
    },
    {
        title: 'Downloads',
        icon: Downloads,
        number: 0,
    },
    {
        title: 'Your movies',
        icon: YourMovies,
    },
];

const playlist = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dfcvahbig/image/upload/v1700959142/reactnative/youtube/ReactNativevsFlutter_andygv.webp',
        videos: [],
        title: 'React Native',
        isPrivate: true,
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dfcvahbig/image/upload/v1700959142/reactnative/youtube/ReactNativeAnimations_zutghr.webp',
        videos: [1, 2, 3],
        title: 'RN - Animated',
        isPrivate: true,
    },
];

const Library = () => {
    const [playlist, setPlaylist] = useState([]);
    const [histories, setHistories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const playlistPromise = new Promise((resolve, reject) =>
            fetch(`${config.ENDPOINT}/playlist`)
                .then((data) => data.json())
                .then(resolve)
                .catch(reject),
        );
        const historiesPromise = new Promise((resolve, reject) =>
            fetch(`${config.ENDPOINT}/histories`)
                .then((data) => data.json())
                .then(resolve)
                .catch(reject),
        );

        async function getData() {
            setLoading(true);

            const [playlist, histories] = await Promise.all([playlistPromise, historiesPromise]);

            setHistories(histories);
            setPlaylist(playlist);

            setLoading(false);
        }

        getData();
    }, []);

    return (
        <DefaultLayout>
            {(loading && (
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='#004fd2' />
                </View>
            )) || (
                <Fragment>
                    <View style={styles.historyLayout}>
                        <LibraryHeader icon={HistoryIcon} title='View all' />
                        <FlatList
                            horizontal
                            contentContainerStyle={styles.historyVideoLayout}
                            showsHorizontalScrollIndicator={false}
                            data={histories}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <HistoryItem data={item} />}
                        />
                    </View>
                    <View style={styles.historyLayout}>
                        <LibraryHeader icon={PlaylistIcon} title='Playlists' />
                        <FlatList
                            horizontal
                            contentContainerStyle={styles.historyVideoLayout}
                            showsHorizontalScrollIndicator={false}
                            data={playlist}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <Playlist data={item} />}
                        />
                    </View>
                </Fragment>
            )}

            {options.map((option) => (
                <LibraryItem data={option} key={uuid.v4()} />
            ))}
        </DefaultLayout>
    );
};

export default Library;
