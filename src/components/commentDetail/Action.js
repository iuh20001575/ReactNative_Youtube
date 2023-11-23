import React from 'react';
import { Pressable, View } from 'react-native';
import { formatView } from '../../utils';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

export default function Action({ icon, number }) {
    const Icon = icon;

    return (
        <View style={styles.action}>
            <Pressable>
                <Icon />
            </Pressable>
            {!number || <TextCustomize size='xs'>{formatView(number, false)}</TextCustomize>}
        </View>
    );
}
