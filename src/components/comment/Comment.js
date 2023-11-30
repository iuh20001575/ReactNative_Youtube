import React from 'react';
import { Image, View } from 'react-native';
import TextCustomize from '../../components/text';
import styles from './styles';

const Comment = ({ comment, lineText = 4 }) => {
    return (
        <View style={styles.comment}>
            <Image source={{ uri: comment.avatar }} resizeMode='cover' style={styles.avatar} />
            <TextCustomize style={styles.text} numberOfLines={lineText} size='xs'>
                {comment.content}
            </TextCustomize>
        </View>
    );
};

export default Comment;
