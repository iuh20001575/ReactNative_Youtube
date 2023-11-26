import { useNavigation } from '@react-navigation/native';
import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { BackIcon, CloseIcon, MicIcon } from '~/components/icons';
import Input from '../../components/input/Input';
import useSearch from '../../hooks/useSearch';
import styles from './styles';

const SearchHeader = () => {
    const navigation = useNavigation();
    const { value, setValue } = useSearch();
    const ref = useRef();

    const handleClose = () => setValue('');
    const handleGoBack = () => navigation.goBack();
    const handleSubmitEditing = () =>
        navigation.navigate('searchResult', {
            value,
        });

    useLayoutEffect(() => {
        ref.current.focus();
    }, [value]);

    return (
        <View style={styles.container}>
            <Pressable onPress={handleGoBack}>
                <BackIcon />
            </Pressable>
            <View style={styles.inputGroup}>
                <Input
                    ref={ref}
                    value={value}
                    onChangeText={setValue}
                    placeholderTextColor='rgba(102, 102, 102, 1)'
                    style={styles.input}
                    placeholder='Search YouTube'
                    selectionColor='rgba(15, 15, 15, 1)'
                    cursorColor='rgba(15, 15, 15, 1)'
                    underlineColorAndroid='transparent'
                    onSubmitEditing={handleSubmitEditing}
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
