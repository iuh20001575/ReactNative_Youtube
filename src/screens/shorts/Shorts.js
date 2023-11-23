import React, { useMemo, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FooterLayout from '~/layouts/footerLayout';
import config from '../../config';
import { shortVideos } from '../../data';
import { compareNumber } from '../../utils';
import Short from './Short';

const Shorts = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { bottom } = useSafeAreaInsets();
    const SHORT_HEIGHT = useMemo(() => Dimensions.get('window').height - config.NAVIGATION_HEIGHT - bottom, []);

    const handleScroll = (e) => setSelectedIndex(e.nativeEvent.contentOffset.y.toFixed(0) / SHORT_HEIGHT.toFixed(0));

    // const route = useRoute();
    // const duration = route.params?.duration ?? 0;
    // const [currentDuration, setCurrentDuration] = useState(0);

    // useEffect(() => {
    //     setInterval(() => setCurrentDuration((prev) => prev + 1), 1000);
    // }, []);
    return (
        <FooterLayout>
            <FlatList
                pagingEnabled
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={shortVideos}
                renderItem={({ item, index }) => (
                    <Short active={compareNumber(selectedIndex, index)} video={item} height={SHORT_HEIGHT} />
                )}
                style={{
                    height: SHORT_HEIGHT,
                }}
                onScroll={handleScroll}
            />
            <View style={{ height: config.NAVIGATION_HEIGHT }} />
        </FooterLayout>
    );
};

export default Shorts;
