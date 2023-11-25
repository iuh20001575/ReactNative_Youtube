import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import DetailVideo from '../../components/detailVideo/DetailVideo';
import SearchResultHeader from '../../components/searchResultHeader';
import ShortImage from '../../components/shortImage';
import VideoItem from '../../components/videoItem/VideoItem';
import config from '../../config';
import { FilterProvider } from '../../context/filterContext';
import { videos as data } from '../../data';
import FooterLayout from '../../layouts/footerLayout/FooterLayout';

const SearchResult = () => {
    const route = useRoute();

    const value = route.params?.value ?? '';
    const [filter, setFilter] = useState('All');
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [videosData, setVideosData] = useState([]);
    const [shorts, setShorts] = useState([]);

    const videos = useSelector((state) => state.playingVideo.videos);

    useEffect(() => {
        setSelectedVideo(videos?.length ? videos.at(-1) : null);
    }, [videos]);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            if (filter === 'Shorts') {
                const res = await fetch(`${config.ENDPOINT}/search/shorts?query=${value}`);
                const data = await res.json();

                setShorts(data);
            } else {
                setVideosData(data.filter((video) => new RegExp(value, 'i').test(video.title)));
            }

            setLoading(false);
        }

        getData();
    }, [filter]);

    return (
        <FooterLayout isSafe>
            <FilterProvider value={{ filter, setFilter }}>
                <SearchResultHeader loading={loading} />
                {(loading && (
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size='large' color='#004fd2' />
                    </View>
                )) ||
                    (filter === 'Shorts' && <ShortImage data={shorts} />) || (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {videosData.map((item) => (
                                <VideoItem key={item.id} video={item} />
                            ))}
                        </ScrollView>
                    )}
                <View style={{ height: config.NAVIGATION_HEIGHT }} />
                {selectedVideo && <DetailVideo selectedVideo={selectedVideo} />}
            </FilterProvider>
        </FooterLayout>
    );
};

export default SearchResult;
