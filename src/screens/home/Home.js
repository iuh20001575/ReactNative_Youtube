import React from 'react';
import { View } from 'react-native';
import Filter from '~/components/filter';
import { ExploreIcon } from '~/components/icons';
import DefaultLayout from '~/layouts/defaultLayout';
import styles from './styles';

const filters = [
    {
        icon: ExploreIcon,
    },
    {
        title: 'All',
    },
    {
        title: 'New to you',
        special: true,
    },
    {
        title: 'Music',
    },
    {
        title: 'Lo-fi',
    },
    {
        title: 'Gaming',
    },
];

const Home = () => {
    return (
        <DefaultLayout>
            <View style={styles.filterContainer}>
                <Filter data={filters} />
            </View>
        </DefaultLayout>
    );
};

export default Home;
