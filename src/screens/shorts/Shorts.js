import React, { useState } from 'react';
import { FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import FooterLayout from '~/layouts/footerLayout';
import { shortVideos } from '../../data';
import Short from './Short';

const Shorts = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
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
                keyExtractor={() => uuid.v4()}
                data={shortVideos}
                renderItem={({ item: video }) => <Short video={video} />}
            />
        </FooterLayout>
    );
};

export default Shorts;
