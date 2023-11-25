import { Skeleton } from '@rneui/themed';
import React from 'react';
import { FlatList } from 'react-native';
import styles from './styles';

const FilterSkeleton = () => {
    return (
        <FlatList
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            horizontal
            data={new Array(7).fill(null)}
            renderItem={({ _, index }) => (
                <Skeleton style={[styles.filterItem, index || { marginLeft: 12 }]} width={70} height={32} />
            )}
        />
    );
};

export default FilterSkeleton;
