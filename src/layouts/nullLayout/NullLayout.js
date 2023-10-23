import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Wrapper from '~/components/wrapper';
import styles from './styles';

const NullLayout = ({ children }) => {
    return (
        <Wrapper style={styles.container}>
            <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false}>
                <View style={[styles.body, styles.flex1]}>{children}</View>
            </ScrollView>
        </Wrapper>
    );
};

export default NullLayout;
