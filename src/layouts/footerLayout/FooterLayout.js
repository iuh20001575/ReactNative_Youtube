import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Navigation from '../components/navigation';
import styles from './styles';

const FooterLayout = ({ children, isSafe }) => {
    const { bottom, top } = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                styles.flex1,
                { paddingBottom: bottom, paddingTop: isSafe ? top : 0, backgroundColor: '#fff' },
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
