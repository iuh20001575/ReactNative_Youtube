import React from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { MoreIcon } from '~/components/icons';
import TextCustomize from '~/components/text';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ShortImageItem = ({ data }) => {
    const navigation = useNavigation();

    const handlePress = () =>
        navigation.navigate('shorts', {
            short: data,
            showBack: true,
        });

    return (
        <Pressable onPress={handlePress} style={styles.item}>
            <ImageBackground style={styles.wrapper} borderRadius={8} source={{ uri: data.image }}>
                <View style={styles.title}>
                    <TextCustomize numberOfLines={2} fontWeight={400} size='xs' style={styles.itemTitle}>
                        {data.title}
                    </TextCustomize>
                </View>
                <Pressable style={styles.moreBtn}>
                    <MoreIcon fill='#fff' />
                </Pressable>
            </ImageBackground>
        </Pressable>
    );
};

export default ShortImageItem;
