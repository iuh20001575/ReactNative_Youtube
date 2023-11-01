import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Wrapper from '~/components/wrapper';
import useTheme from '../../context/themeContext';
import Header from '../components/header';
import Navigation from '../components/navigation';
import styles from './styles';

const DefaultLayout = ({ children }) => {
    const { dark, setDark } = useTheme();
    const route = useRoute();

    useEffect(() => {
        setDark(route.name === 'shorts');
    }, [route]);

    return (
        <Wrapper style={[styles.container, dark && { backgroundColor: 'rgb(15, 15, 15)' }]}>
            <View style={styles.flex1}>
                <ScrollView style={[styles.flex1]} showsVerticalScrollIndicator={false}>
                    <Header />
                    <View style={[styles.body, styles.scroll]}>{children}</View>
                </ScrollView>
                <Navigation />
            </View>
        </Wrapper>
    );
};

export default DefaultLayout;
