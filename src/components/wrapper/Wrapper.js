import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Wrapper = ({ style = [], ...props }) => {
    const styleCustomize = Array.isArray(style) ? style : [style];

    styleCustomize.push(styles.container);

    return <SafeAreaView style={styleCustomize} {...props} />;
};

export default Wrapper;
