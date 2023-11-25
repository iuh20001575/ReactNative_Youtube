import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable, View } from 'react-native';
import uuid from 'react-native-uuid';
import { BackIcon, CloseIcon, MicIcon } from '~/components/icons';
import Filter from '../../components/filter';
import FilterSkeleton from '../filter/FilterSkeleton';
import { CastIcon, MoreIcon } from '../icons';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const actions = [
    {
        icon: MicIcon,
        style: [styles.micBtn, styles.bgPrimary],
    },
    {
        icon: CastIcon,
        style: styles.micBtn,
    },
    {
        icon: MoreIcon,
        style: styles.micBtn,
    },
];

const filters = [
    { title: 'All', id: 1 },
    { title: 'Shorts', id: 2 },
    { title: 'Unwatched', id: 3 },
    { title: 'Watched', id: 4 },
    { title: 'Recently uploaded', id: 5 },
];

const SearchResultHeader = ({ loading }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const value = route.params?.value ?? '';

    const handleClose = () => navigation.goBack();
    const handleGoBack = () => navigation.goBack();

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Pressable onPress={handleGoBack}>
                    <BackIcon />
                </Pressable>
                <View style={[styles.inputGroup, styles.bgPrimary]}>
                    <TextCustomize numberOfLines={1} style={styles.input}>
                        {value}
                    </TextCustomize>
                    <Pressable onPress={handleClose} style={styles.closeBtn}>
                        <CloseIcon />
                    </Pressable>
                </View>
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Pressable key={uuid.v4()} style={action.style}>
                            <Icon />
                        </Pressable>
                    );
                })}
            </View>
            <View style={styles.filtersContainer}>
                {(loading && <FilterSkeleton />) || <Filter style={styles.filters} data={filters} />}
            </View>
        </View>
    );
};

export default SearchResultHeader;
