import React from 'react';
import { View } from 'react-native';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const LibraryHeader = ({ icon, title }) => {
    const Icon = icon;

    return (
        <View style={styles.history}>
            <Icon />
            <TextCustomize size='lg' style={styles.flex1}>
                {title}
            </TextCustomize>
            <TextCustomize fontWeight={500} style={styles.allBtn}>
                View all
            </TextCustomize>
        </View>
    );
};

export default LibraryHeader;
