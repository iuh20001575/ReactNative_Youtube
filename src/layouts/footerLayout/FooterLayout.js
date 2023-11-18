import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import Wrapper from '~/components/wrapper';
import useTheme from '../../context/themeContext';
import Navigation from '../components/navigation';
import styles from './styles';

const FooterLayout = ({ children }) => {
    const { dark, setDark } = useTheme();
    const route = useRoute();

    useEffect(() => {
        setDark(route.name === 'shorts');
    }, [route]);

    return (
        <Wrapper style={[styles.container, dark && { backgroundColor: '#0f0f0f' }]}>
            <View style={styles.flex1}>
                <ScrollView
                    style={styles.flex1}
                    contentContainerStyle={styles.flex1}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[styles.body, styles.scroll]}>{children}</View>
                </ScrollView>
                <Navigation />
            </View>
        </Wrapper>
    );
};

export default FooterLayout;
