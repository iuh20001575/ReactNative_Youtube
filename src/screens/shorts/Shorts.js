import { useRoute } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import FooterLayout from '~/layouts/footerLayout';
import config from '../../config';
import { compareNumber } from '../../utils';
import Short from './Short';
import { useEffect } from 'react';
import { getShorts, sort } from '../../features/shortsSlice';
import { useLayoutEffect } from 'react';

const Shorts = () => {
    const route = useRoute();
    const short = route.params?.short;

    const dispatch = useDispatch();
    const { shorts, page, loading, isEnd } = useSelector((state) => state.shorts);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { bottom } = useSafeAreaInsets();
    const SHORT_HEIGHT = useMemo(() => Dimensions.get('window').height - config.NAVIGATION_HEIGHT - bottom, []);

    const handleScroll = (e) => setSelectedIndex(e.nativeEvent.contentOffset.y.toFixed(0) / SHORT_HEIGHT.toFixed(0));

    useLayoutEffect(() => {
        if (short) dispatch(sort(short));
    }, [short]);

    useEffect(() => {
        function getShort() {
            dispatch(getShorts({ page: page + 1 }));
        }

        if (selectedIndex + 2 >= shorts.length && !loading && !isEnd) getShort();
    }, [selectedIndex]);

    return (
        <FooterLayout>
            <FlatList
                initialNumToRender={20}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={shorts}
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
