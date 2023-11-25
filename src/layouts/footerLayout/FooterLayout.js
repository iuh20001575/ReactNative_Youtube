import { useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../features/themeSlice';
import Navigation from '../components/navigation';
import styles from './styles';

const FooterLayout = ({ children, isSafe }) => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { bottom, top } = useSafeAreaInsets();
    const { dark } = useSelector((state) => state.theme);

    useLayoutEffect(() => {
        dispatch(setTheme(route.name === 'shorts'));
    }, [route]);

    return (
        <View
            style={[
                styles.container,
                styles.flex1,
                { paddingBottom: bottom, paddingTop: isSafe ? top : 0, backgroundColor: dark ? '#0f0f0f' : '#fff' },
            ]}
        >
            <View style={styles.flex1}>
                {children}
                <Navigation />
            </View>
        </View>
    );
};

export default FooterLayout;
