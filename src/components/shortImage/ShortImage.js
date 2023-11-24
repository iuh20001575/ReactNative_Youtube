import React, { memo } from 'react';
import { FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import ShortImageItem from './ShortImageItem';
import styles from './styles';

const ShortImage = ({ data }) => {
    return (
        <FlatList
            numColumns={2}
            style={styles.container}
            data={data.slice(0, 4)}
            renderItem={({ item }) => <ShortImageItem data={item} />}
            keyExtractor={() => uuid.v4()}
            columnWrapperStyle={styles.gap8}
        />
    );
};

export default memo(ShortImage);
