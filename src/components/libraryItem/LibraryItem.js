import React from 'react';
import { View } from 'react-native';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const LibraryItem = ({ data }) => {
    const Icon = data.icon;

    return (
        <View style={styles.anotherOption}>
            <Icon />
            <View style={styles.flex1}>
                <TextCustomize>{data.title}</TextCustomize>
                {Number.isInteger(data.number) && (
                    <TextCustomize size='sm' style={styles.desc}>
                        {data.number} videos
                    </TextCustomize>
                )}
            </View>
        </View>
    );
};

export default LibraryItem;
