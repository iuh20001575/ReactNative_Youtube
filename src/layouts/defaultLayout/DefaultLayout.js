import React from 'react';
import { ScrollView, View } from 'react-native';
import Wrapper from '~/components/wrapper';
import Header from '../components/header';
import Navigation from '../components/navigation';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';

const DefaultLayout = ({ children }) => {
    return (
        <Wrapper style={styles.container}>
            <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false}>
                <Header />
                <View style={styles.body}>{children}</View>
                <Navigation />
            </ScrollView>
        </Wrapper>
    );
};

export default DefaultLayout;
