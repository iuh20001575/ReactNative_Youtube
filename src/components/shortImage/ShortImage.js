import React, { memo } from 'react';
import { FlatList } from 'react-native';
import ShortImageItem from './ShortImageItem';
import styles from './styles';

const ShortImage = ({ data, limit }) => {
    const dataRender = limit ? data.slice(0, limit) : data;

    return (
        <FlatList
            numColumns={2}
            style={styles.container}
            data={dataRender}
            renderItem={({ item }) => <ShortImageItem data={item} />}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={styles.gap8}
            contentContainerStyle={styles.gap8}
        />
    );
};

export default memo(ShortImage);
