import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TextCustomize from '../text/TextCustomize';

const AccountItem = ({ icon, children, separator }) => {
    const Icon = icon;

    return (
        <View style={[styles.anotherOption, separator && styles.separator]}>
            <Icon />
            <TextCustomize style={{ flex: 1 }}>{children}</TextCustomize>
        </View>
    );
};

export default AccountItem;
