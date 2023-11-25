import React from 'react';
import { FlatList } from 'react-native';
import FilterItem from './FilterItem';
import styles from './styles';

const Filter = ({ data, style = {}, ...props }) => {
    return (
        <FlatList
            scrollEnabled
            disableScrollViewPanResponder
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.container, style]}
            horizontal
            data={data}
            renderItem={({ item, index }) => <FilterItem isFirst={item.icon} data={item} />}
            {...props}
        />
    );
};

export default Filter;
