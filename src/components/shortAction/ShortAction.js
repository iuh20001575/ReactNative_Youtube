import React from 'react';
import { Pressable } from 'react-native';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const ShortAction = ({ icon, children }) => {
    const Icon = icon;

    return (
        <Pressable style={styles.actionItem}>
            <Icon />
            <TextCustomize size='xs' style={styles.textAction}>
                {children}
            </TextCustomize>
        </Pressable>
    );
};

export default ShortAction;
