import React from 'react';
import { View } from 'react-native';
import TextCustomize from '~/components/text';
import styles from './styles';

const Category = ({ icon, children }) => {
    const Icon = icon;

    return (
        <View style={styles.category}>
            <Icon />
            {!children || (
                <TextCustomize fontWeight={500} size='xs'>
                    {children}
                </TextCustomize>
            )}
        </View>
    );
};

export default Category;
