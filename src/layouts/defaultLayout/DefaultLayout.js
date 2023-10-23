import React from 'react';
import { ScrollView, View } from 'react-native';
import Wrapper from '~/components/wrapper';
import Header from '../components/header';
import Navigation from '../components/navigation';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DefaultLayout = ({ children }) => {
    return (
        <Wrapper style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Header />
                <View style={styles.body}>{children}</View>
            </ScrollView>
            <Navigation />
        </Wrapper>
    );
};

export default DefaultLayout;
