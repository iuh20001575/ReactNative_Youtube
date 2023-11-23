import { useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../features/themeSlice';
import Navigation from '../components/navigation';
import styles from './styles';

const FooterLayout = ({ children }) => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { bottom } = useSafeAreaInsets();

    useLayoutEffect(() => {
        dispatch(setTheme(route.name === 'shorts'));
    }, [route]);

    return (
        <View style={[styles.container, styles.flex1, { paddingBottom: bottom }]}>
            <View style={styles.flex1}>
                {children}
                <Navigation />
            </View>
        </View>
    );
};

export default FooterLayout;
