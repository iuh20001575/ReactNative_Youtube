import React, { forwardRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { BackIcon, CloseIcon, MicIcon } from '~/components/icons';
import Input from '~/components/input';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import useSearch from '../../hooks/useSearch';

const SearchHeader = () => {
    const navigation = useNavigation();
    const { value, setValue } = useSearch();

    const handleClose = () => setValue('');
    const handleGoBack = () => navigation.goBack();

    return (
        <View style={styles.container}>
            <Pressable onPress={handleGoBack}>
                <BackIcon />
            </Pressable>
            <View style={styles.inputGroup}>
                <Input
                    value={value}
                    onChangeText={setValue}
                    placeholderTextColor='rgba(102, 102, 102, 1)'
                    style={styles.input}
                    placeholder='Search YouTube'
                    selectionColor='rgba(15, 15, 15, 1)'
                    cursorColor='rgba(15, 15, 15, 1)'
                    underlineColorAndroid='transparent'
                />
                {!value || (
                    <Pressable onPress={handleClose} style={styles.closeBtn}>
                        <CloseIcon />
                    </Pressable>
                )}
            </View>
            {!value && (
                <Pressable style={styles.micBtn}>
                    <MicIcon />
                </Pressable>
            )}
        </View>
    );
};

export default forwardRef(SearchHeader);
