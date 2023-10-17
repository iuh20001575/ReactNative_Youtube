import React from 'react';
import { View } from 'react-native';
import Wrapper from '~/components/wrapper';
import Header from '../components/header';
import Navigation from '../components/navigation';
import styles from './styles';

const DefaultLayout = ({ children }) => {
    return (
        <Wrapper style={styles.container}>
            <Header />
            <View style={styles.body}>{children}</View>
            <Navigation />
        </Wrapper>
    );
};

export default DefaultLayout;
