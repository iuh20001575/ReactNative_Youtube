import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';

const CategoryWrapper = ({ isView = false, ...props }) => {
    const Comp = isView ? View : Pressable;

    return <Comp {...props} style={styles.wrapper} />;
};

export default CategoryWrapper;
