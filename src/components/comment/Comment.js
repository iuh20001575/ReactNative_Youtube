import React from 'react';
import { Image, View } from 'react-native';
import TextCustomize from '../../components/text';
import styles from './styles';

const Comment = ({ comment }) => {
    return (
        <View style={styles.comment}>
            <Image source={comment.avatar} resizeMode='cover' style={styles.avatar} />
            <TextCustomize numberOfLines={2} size='xs'>
                {comment.comment}
            </TextCustomize>
        </View>
    );
};

export default Comment;
