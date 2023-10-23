import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import ShortImageItem from './ShortImageItem';
import uuid from 'react-native-uuid';

const data = [
    {
        title: 'Tạm biệt TypeScript, các dự án LỚN đành hẹn gặp lại!',
        image: 'https://images.unsplash.com/photo-1697442054113-f91165bd8885?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Easily create rich video players for Android and iOS with PRESTOplay for React Native. Quickly construct uniform cross-platform...',
        image: 'https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?auto=format&fit=crop&q=80&w=1427&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Xây dựng ứng dụng Mobile với React Native 2022',
        image: 'https://images.unsplash.com/photo-1592609931041-40265b692757?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'React Native Tutorial for Beginners - Build a React Native App',
        image: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1335&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const ShortImage = () => {
    return (
        <FlatList
            numColumns={2}
            style={styles.container}
            data={data}
            renderItem={({ item }) => <ShortImageItem data={item} />}
            keyExtractor={() => uuid.v4()}
            columnWrapperStyle={styles.gap8}
        />
    );
};

export default ShortImage;
