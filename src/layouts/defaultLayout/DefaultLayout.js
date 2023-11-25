import { useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '~/components/wrapper';
import DetailVideo from '../../components/detailVideo/DetailVideo';
import { setTheme } from '../../features/themeSlice';
import Header from '../components/header';
import Navigation from '../components/navigation';
import styles from './styles';

const DefaultLayout = ({ children }) => {
    const route = useRoute();

    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = useSelector((state) => state.playingVideo.videos);
    const { dark } = useSelector((state) => state.theme);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setTheme(route.name === 'shorts'));
    }, [route]);

    useEffect(() => {
        setSelectedVideo(videos?.length ? videos.at(-1) : null);
    }, [videos]);

    return (
        <Wrapper style={[styles.container, dark && { backgroundColor: 'rgb(15, 15, 15)' }]}>
            <View style={styles.flex1}>
                <ScrollView style={[styles.flex1]} showsVerticalScrollIndicator={false}>
                    <Header />
                    <View style={[styles.body, styles.scroll]}>{children}</View>
                </ScrollView>
                {selectedVideo && <DetailVideo selectedVideo={selectedVideo} />}
                <Navigation />
            </View>
        </Wrapper>
    );
};

export default DefaultLayout;
