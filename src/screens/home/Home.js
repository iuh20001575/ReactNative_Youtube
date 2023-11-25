import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '~/components/filter';
import { ExploreIcon, ShortsRedIcon } from '~/components/icons';
import ShortImage from '~/components/shortImage';
import TextCustomize from '~/components/text';
import DefaultLayout from '~/layouts/defaultLayout';
import FilterSkeleton from '../../components/filter/FilterSkeleton';
import Video from '../../components/videoItem/VideoItem';
import VideoItemSkeleton from '../../components/videoItem/VideoItemSkeleton';
import config from '../../config';
import { FilterProvider } from '../../context/filterContext';
import videosData from '../../data/videos';
import { getShorts } from '../../features/shortsSlice';
import styles from './styles';

const Home = () => {
    const [filters, setFilters] = useState(() => [{ icon: ExploreIcon }]);
    const { shorts } = useSelector((state) => state.shorts);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const [firstVideo, ...videos] = useMemo(() => {
        if (filter === 'All') return videosData;

        if (filter === 'New to you') return [...videosData].sort((a, b) => new Date(b.date) - new Date(a.date));

        return videosData.filter((video) => video.type === filter.toLowerCase());
    }, [videosData, filter]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const [filters] = await Promise.all([
                new Promise((resolve, reject) =>
                    fetch(`${config.ENDPOINT}/homeFilters`)
                        .then((data) => data.json())
                        .then(resolve)
                        .catch(reject),
                ),
                dispatch(getShorts({ page: 1 })).unwrap(),
            ]);

            setFilters((prev) => [...prev, ...filters]);
            setLoading(false);
        }

        getData();
    }, []);

    return (
        <FilterProvider value={{ filter, setFilter }}>
            <DefaultLayout>
                {/* Filter */}
                <View style={styles.filterContainer}>
                    {(loading && <FilterSkeleton />) || <Filter data={filters} />}
                </View>

                {(loading && (
                    <View style={styles.listVideo}>
                        {new Array(3).fill(null).map(() => (
                            <VideoItemSkeleton key={uuid.v4()} />
                        ))}
                    </View>
                )) || (
                    <Fragment>
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
                                <ShortImage limit={4} data={shorts} />
                            </View>
                        )}

                        {/* List Video */}
                        <View style={[styles.listVideo, styles.mt32]}>
                            {videos.map((video) => (
                                <Video key={video.id} video={video} />
                            ))}
                        </View>
                    </Fragment>
                )}
            </DefaultLayout>
        </FilterProvider>
    );
};

export default Home;
